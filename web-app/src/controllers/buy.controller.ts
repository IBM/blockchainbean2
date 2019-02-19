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
import {Buy} from '../models';

import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();

export class BuyController {
  constructor() {}

  @post('/buy',{
    responses: {
      '200': {
        description: 'Todo model instance',
        content: {'application/json': {schema: {'x-ts-type': Buy}}},
      },
    },
  })
  async createBuy(@requestBody() requestBody: Buy): Promise<Buy> {
    console.log('Buy, requestBody: ')
    console.log(requestBody)
    let networkObj = await blockchainClient.connectToNetwork();
    if (!networkObj) {
      let errString = 'Error connecting to network';
      let buy = new Buy({issuer: errString, paperNumber: errString, currentOwner: errString, newOwner: errString,
        price: errString, purchaseDateTime: errString
      });
      return buy;
    }
    console.log('newtork obj: ')
    console.log(networkObj)
    // dateStr = dateStr.toDateString();
    let dataForBuy = {
      function: 'buy',
      issuer: requestBody.issuer,
      paperNumber: requestBody.paperNumber,
      currentOwner: requestBody.currentOwner,
      newOwner: requestBody.newOwner,
      price: requestBody.price,
      purchaseDateTime: requestBody.purchaseDateTime,
      contract: networkObj.contract
    };

    var resultAsBuffer = await blockchainClient.buy(dataForBuy);

    console.log('result from blockchainClient.submitTransaction in controller: ')
    let result = JSON.parse(Buffer.from(JSON.parse(resultAsBuffer)).toString())
    let buy = new Buy({issuer: result.issuer, paperNumber: result.paperNumber, currentOwner: result.currentOwner,
      newOwner: result.currentOwner, price: result.price, purchaseDateTime: result.purchaseDateTime 
    });
    return buy;          
  }

}
