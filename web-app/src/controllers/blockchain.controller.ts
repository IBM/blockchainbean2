/* tslint:disable:no-any */
//import { Request, RestBindings, get, operation, requestBody,
//ResponseObject, param, HttpErrors } from '@loopback/rest';
import { inject } from '@loopback/context';
import { operation, RestBindings, Request, param, requestBody } from '@loopback/rest';
import { BlockChainModule } from '../blockchainClient';
import { ResponseMessage } from '../models/response-message.model';

let blockchainClient = new BlockChainModule.BlockchainClient();


export class BlockchainController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }

  /**

   * @returns Blockchain as string
   */
  @operation('get', '/blockchain', {

    responses: {
      '200': {
        description: 'Blockchain',
        content: { 'application/text': { schema: { 'x-ts-type': String } } },
      },
    },
  })
  async queryBlockchain(): Promise<String> {
    let networkObj = await blockchainClient.connectToNetwork();
    let result = await blockchainClient.queryAll(networkObj.contract);
    var rez = JSON.parse(result.toString());
    return rez
  }


  @operation('get', '/blockchain/{key}', {
    responses: {
      '200': {
        description: 'Blockchain',
        content: { 'application/text': { schema: { 'x-ts-type': String } } },
      },
    },
  })
  async getPartByKey(@param({ name: 'key', in: 'path' }) key: string): Promise<String> {
    let networkObj = await blockchainClient.connectToNetwork();

    let result = await blockchainClient.queryByKey2(networkObj.contract, key);
    var rez = JSON.parse(result.toString());
    return rez
  }


}
