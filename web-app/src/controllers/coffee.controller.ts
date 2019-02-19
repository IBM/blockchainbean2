/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Coffee} from '../models/coffee.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Coffee
 * An asset named Coffee
 */
export class CoffeeController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Coffee')
  async coffeeCreate(@requestBody() requestBody: Coffee): Promise<Coffee> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Coffee')
  async coffeeFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<Coffee[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/Coffee/{id}')
  async coffeeExists(@param({name: 'id', in: 'path'}) id: string): Promise<{
  exists?: boolean;
}> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Coffee/{id}')
  async coffeeFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Coffee> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  @operation('put', '/Coffee/{id}')
  async coffeeReplaceById(@requestBody() requestBody: Coffee, @param({name: 'id', in: 'path'}) id: string): Promise<Coffee> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/Coffee/{id}')
  async coffeeDeleteById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

}

