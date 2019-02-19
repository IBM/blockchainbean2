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
import {Issue} from '../models';

import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();

export class IssueController {
  constructor() {}

  @post('/issue', {
    responses: {
      '200': {
        description: 'Todo model instance',
        content: {'application/json': {schema: {'x-ts-type': Issue}}},
      },
    },
  })
  async createIssue(@requestBody() requestBody: Issue): Promise<Issue> {
    console.log('Buy, requestBody: ')
    console.log(requestBody)


    let networkObj = await blockchainClient.connectToNetwork();
    if (!networkObj) {
      let errString = 'Error connecting to network';
      let issue = new Issue({issuer: errString, paperNumber: errString, issueDateTime: errString, maturityDateTime: errString });
      return issue;
    }
    console.log('newtork obj: ')
    console.log(networkObj)

    let dataForIssue = {
      function: 'issue',
      issuer: requestBody.issuer,
      paperNumber: requestBody.paperNumber,
      issueDateTime: requestBody.issueDateTime,
      maturityDateTime: requestBody.maturityDateTime,
      faceValue: requestBody.faceValue,
      contract: networkObj.contract
    };

    var resultAsBuffer = await blockchainClient.issue(dataForIssue);

    console.log('result from blockchainClient.submitTransaction in controller: ')
    console.log('result from blockchainClient.submitTransaction in controller: ')
    let result = JSON.parse(Buffer.from(JSON.parse(resultAsBuffer)).toString())
    let issue = new Issue({issuer: result.issuer, paperNumber: result.paperNumber, issueDateTime: result.issueDateTime,
      maturityDateTime: result.maturityDateTime 
    });
    return issue;       
  }

}
