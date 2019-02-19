// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {
  del,
  get,
  getFilterSchemaFor,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {Redeem} from '../models';

import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();

export class RedeemController {
  constructor() {}

  @post('/redeem', {
    responses: {
      '200': {
        description: 'Todo model instance',
        content: {'application/json': {schema: {'x-ts-type': Redeem}}},
      },
    },
  })
  async createIssue(@requestBody() requestBody: Redeem): Promise<Redeem> {
    console.log('Buy, requestBody: ')
    console.log(requestBody)

    let networkObj = await blockchainClient.connectToNetwork();
    if (!networkObj) {
      let errString = 'Error connecting to network';
      let redeem = new Redeem({issuer: errString, paperNumber: errString, redeemingOwner: errString,
        redeemDateTime: errString
      });
      return redeem;
    }
    console.log('newtork obj: ')
    console.log(networkObj)
    
    let dataForRedeem = {
      function: 'redeem',
      issuer: requestBody.issuer,
      paperNumber: requestBody.paperNumber,
      redeemingOwner: requestBody.redeemingOwner,
      redeemDateTime: requestBody.redeemDateTime,
      contract: networkObj.contract
    };

    var resultAsBuffer = await blockchainClient.redeem(dataForRedeem);

    console.log('result from blockchainClient.submitTransaction in controller: ')
    let result = JSON.parse(Buffer.from(JSON.parse(resultAsBuffer)).toString())
    let issue = new Redeem({issuer: result.issuer, paperNumber: result.paperNumber, redeemingOwner: result.redeemingOwner,
      redeemDateTime: result.redeemDateTime 
    });
    return issue;           
  }

}
