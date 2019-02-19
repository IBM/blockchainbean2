// // Copyright IBM Corp. 2017,2018. All Rights Reserved.
// // Node module: @loopback/example-todo
// // This file is licensed under the MIT License.
// // License text available at https://opensource.org/licenses/MIT

// import {inject} from '@loopback/core';
// import {Filter, repository} from '@loopback/repository';
// import {
//   del,
//   get,
//   getFilterSchemaFor,
//   param,
//   patch,
//   post,
//   put,
//   requestBody,
// } from '@loopback/rest';
// import { Issue } from '../models';

// import { BlockChainModule } from '../blockchainClient';

// let blockchainClient = new BlockChainModule.BlockchainClient();

// export class QueryController {
//   constructor(
//   ) {}
 
//   // @operation('get', '/Regulator/{id}')
//   async queryFindById(@param({ name: 'id', in: 'path' }) id: string, @param({ name: 'filter', in: 'query' }) filter: string): Promise<Regulator> {

//     let networkObj = await blockchainClient.connectToNetwork();

//     if (!networkObj) {
//       let errString = 'Error connecting to network';
//       let issue = new Issue({issuer: errString, paperNumber: errString, issueDateTime: errString, maturityDateTime: errString });
//       return issue;
//     }
    
//     let dataForQuery = {
//       function: 'query',
//       id: id,
//       contract: networkObj.contract,
//       network: networkObj.network
//     };

//     console.log('before blockchainClient.queryByKey')
//     let result = await blockchainClient.queryByKey(dataForQuery);
//     console.log(`lookup by key ${id}`);
//     console.log('result after calling client.queryByKey: ')
//     console.log(result)
//     if (result.id) {
//       var rez = JSON.parse(result.toString());
//       console.log(rez)
//       let address = new Address({ city: rez.address, country: rez.address, street: rez.address });
//       let regulator = new Regulator({ regulatorId: rez.id, organization: rez.organization, address: address });
//       return regulator;
//     }
//     return result;
//   }

//   @get('/query/{id}', {
//     responses: {
//       '200': {
//         description: 'Todo model instance',
//         content: {'application/json': {schema: {'x-ts-type': Issue}}},
//       },
//     },
//   })
//   async findById(
//     @param.path.number('id') id: string,
//     @param.query.boolean('items') items?: boolean,
//   ): Promise<Issue> {

//     let networkObj = await blockchainClient.connectToNetwork();
//     let dataForQuery = {
//       function: 'query',
//       id: id,
//       contract: networkObj.contract,
//       network: networkObj.network
//     };

//     console.log('before blockchainClient.queryByKey')
//     let result = await blockchainClient.queryByKey(dataForQuery);
//     console.log(`lookup by key ${id}`);
//     console.log('result after calling client.queryByKey: ')
//     console.log(result)
//     if (result.id) {
//       var rez = JSON.parse(result.toString());
//       console.log(rez)
//       let address = new Address({ city: rez.address, country: rez.address, street: rez.address });
//       let regulator = new Regulator({ regulatorId: rez.id, organization: rez.organization, address: address });
//       return regulator;
//     }
//     return result;

//     // return await this.todoRepo.findById(id);
//   }



// }
