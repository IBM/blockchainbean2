/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Coffee} from '../models/coffee.model';
import {TransferCoffee} from '../models/transfer-coffee.model';
import { BlockChainModule } from '../blockchainClient';
import { STATUS_CODES } from 'http';
import { response } from 'express';

let blockchainClient = new BlockChainModule.BlockchainClient();
const errorMessage = 'does not exist';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Query
 * Named queries
 */
export class WorldStateController {
  constructor() {}

  /**
   * 
   * 

   * @returns String - everything that is currently in the world state
   */
  @operation('get', '/worldstate/queryAll', {

    responses: {
      '200': {
        description: 'Return the full world state',
        content: { 'application/text': { schema: { 'x-ts-type': String } } },
      },
    },
  })
  async queryAll(): Promise<String> {
    let networkObj = await blockchainClient.connectToNetwork();
    let result = await blockchainClient.queryAll(networkObj.contract);
    var rez = JSON.parse(result.toString());
    return rez
  }

  /**
   * 
   * 

   * @param key 
   * @returns Request was successful
   */
  @operation('get', '/worldstate/{key}', {
    responses: {
      '200': {
        description: 'query the world state by key',
        content: { 'application/text': { schema: { 'x-ts-type': String } } },
      },
      '404': {
        description: 'key does not exist',
        content: { 'application/text': { schema: { 'x-ts-type': String } } },
      }
    },
  })
  async queryByKey(@param({ name: 'key', in: 'path' }) key: string): Promise<String> {
    let networkObj = await blockchainClient.connectToNetwork();
    let result = await blockchainClient.queryByKey2(networkObj.contract, key);
    console.log(result)
    // var rez = JSON.parse(result.toString());
    console.log('before rez: ')
    console.log(result)
    //check if key does not exist, if so, send 404
    if ( result.indexOf( errorMessage ) > -1 ) {
      result = new Error(result);
    }
    return result 
  }

  /**
   * 
   * 

   * @param key 
   * @returns Request was successful
   */
  @operation('delete', '/worldstate/{key}')
  async deleteByKey(@param({ name: 'key', in: 'path' }) key: string): Promise<String> {
    let networkObj = await blockchainClient.connectToNetwork();
    let result = await blockchainClient.deleteByKey(networkObj.contract, key);
    console.log(result)
    // var rez = JSON.parse(result.toString());
    console.log('before rez: ')
    console.log(result)
    //check if key does not exist, if so, send 404
    if ( result.indexOf( errorMessage ) > -1 ) {
      result = new Error(result);
    }
    return result 
  }

}
