/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - submitInboundWeightTally
 * A transaction named submitInboundWeightTally
 */
@model({name: 'submitInboundWeightTally'})
export class SubmitInboundWeightTally {
  constructor(data?: Partial<SubmitInboundWeightTally>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'dateStripped'})
  dateStripped?: string;

  /**
   * 
   */
  @property({name: 'marks'})
  marks?: string;

  /**
   * 
   */
  @property({name: 'bagsExpected'})
  bagsExpected?: string;

  /**
   * A concept named Condition
   */
  @property({name: 'condition'})
  condition?: string;

  /**
   * 
   */
  @property({name: 'insectActivity'})
  insectActivity?: string;

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

