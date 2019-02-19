/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Condition
 * A concept named Condition
 */
@model({name: 'Condition'})
export class Condition {
  constructor(data?: Partial<Condition>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.coffee.Condition';

  /**
   * 
   */
  @property({name: 'condensation', required: true})
  condensation: boolean;

  /**
   * 
   */
  @property({name: 'holeInContainer', required: true})
  holeInContainer: boolean;

  /**
   * 
   */
  @property({name: 'id'})
  id?: string;

}

