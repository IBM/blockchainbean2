/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - cupCoffee
 * An asset named cupCoffee
 */
@model({name: 'cupCoffee'})
export class CupCoffee {
  constructor(data?: Partial<CupCoffee>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.coffee.cupCoffee';

  /**
   * The instance identifier for this type
   */
  @property({name: 'cupId', required: true})
  cupId: string;

  /**
   * 
   */
  @property({name: 'drinkType', required: true})
  drinkType: string;

  /**
   * 
   */
  @property({name: 'barista', required: true})
  barista: string;

  /**
   * 
   */
  @property({name: 'beanType', required: true})
  beanType: string;

  /**
   * 
   */
  @property({name: 'count', required: true})
  count: number;

  /**
   * 
   */
  @property({name: 'lastPour', required: true})
  lastPour: string;

}

