/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - addCoffee
 * A transaction named addCoffee
 */
@model({name: 'addCoffee'})
export class AddCoffee {
  constructor(data?: Partial<AddCoffee>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'size'})
  size?:string;

  /**
   * 
   */
  @property({name: 'roast'})
  roast?: string;

  /**
   * 
   */
  @property({name: 'batchState', required: true})
  batchState?: string;

  /**
   * The identifier of an instance of grower
   */
  @property({name: 'grower'})
  grower?: string

  /**
   * The instance identifier for this type
   */
  // @property({name: 'batchId', required: true})
  // batchId?: string;

  @property({name: 'transactionId'})
  transactionId?: string;

  /**
   * 
   */
  @property({name: 'timestamp'})
  timestamp?: string;

}

