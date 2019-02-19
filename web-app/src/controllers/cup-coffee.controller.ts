/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {CupCoffee} from '../models/cup-coffee.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by cupCoffee
 * An asset named cupCoffee
 */
export class CupCoffeeController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/cupCoffee')
  async cupCoffeeCreate(@requestBody() requestBody: CupCoffee): Promise<CupCoffee> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/cupCoffee')
  async cupCoffeeFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<CupCoffee[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/cupCoffee/{id}')
  async cupCoffeeExists(@param({name: 'id', in: 'path'}) id: string): Promise<{
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
  @operation('get', '/cupCoffee/{id}')
  async cupCoffeeFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<CupCoffee> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  @operation('put', '/cupCoffee/{id}')
  async cupCoffeeReplaceById(@requestBody() requestBody: CupCoffee, @param({name: 'id', in: 'path'}) id: string): Promise<CupCoffee> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/cupCoffee/{id}')
  async cupCoffeeDeleteById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

}

