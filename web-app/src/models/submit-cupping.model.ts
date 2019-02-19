/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - submitCupping
 * A transaction named submitCupping
 */
@model({name: 'submitCupping'})
export class SubmitCupping {
  constructor(data?: Partial<SubmitCupping>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  @property({name: 'cupper'})
  cupper?: string;

  /**
   * 
   */
  @property({name: 'aroma'})
  aroma?: string;

  /**
   * 
   */
  @property({name: 'flavor'})
  flavor?: string;

  /**
   * 
   */
  @property({name: 'afterTaste'})
  afterTaste?: string;

  /**
   * 
   */
  @property({name: 'acidity'})
  acidity?: string;

  /**
   * 
   */
  @property({name: 'body'})
  body?: string;

  /**
   * 
   */
  @property({name: 'finalScore'})
  finalScore?: string;

  /**
   * 
   */
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
  @property({name: 'timestamp'})
  timestamp?: string;

}

