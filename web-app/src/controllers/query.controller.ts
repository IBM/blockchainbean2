/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Coffee} from '../models/coffee.model';
import {TransferCoffee} from '../models/transfer-coffee.model';
import {CupCoffee} from '../models/cup-coffee.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Query
 * Named queries
 */
export class QueryController {
  constructor() {}

  /**
   * 
   * 

   * @param batchId 
   * @returns Request was successful
   */
  @operation('get', '/queries/queryCoffee')
  async queryQueryCoffee(@param({name: 'batchId', in: 'query'}) batchId: string): Promise<Coffee[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param batchId 
   * @returns Request was successful
   */
  @operation('get', '/queries/getBatchHistory')
  async queryGetBatchHistory(@param({name: 'batchId', in: 'query'}) batchId: string): Promise<TransferCoffee[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param CupId 
   * @returns Request was successful
   */
  @operation('get', '/queries/getCupData')
  async queryGetCupData(@param({name: 'CupId', in: 'query'}) CupId: string): Promise<CupCoffee[]> {
    throw new Error('Not implemented');
  }

}

