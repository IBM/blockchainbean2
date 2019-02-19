/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - pourCup
 * A transaction named pourCup
 */
@model({name: 'pourCup'})
export class PourCup {
  constructor(data?: Partial<PourCup>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  @property({name: 'cupId', required: true})
  cupId: string;

  @property({name: 'batchId', required: true})
  batchId: string;

  /**
   * The instance identifier for this type
   */
  @property({name: 'transactionId'})
  transactionId?: string;

  /**
   * 
   */

}

