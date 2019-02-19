/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import {Address} from './address.model';

/**
 * The model class is generated from OpenAPI schema - Grower
 * A participant named Grower
 */
@model({name: 'Grower'})
export class Grower {
  constructor(data?: Partial<Grower>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.coffee.Grower';

  /**
   * 
   */
  @property({name: 'isFairTrade', required: true})
  isFairTrade: boolean;

  /**
   * The instance identifier for this type
   */
  @property({name: 'growerId', required: true})
  growerId: string;

  /**
   * 
   */
  @property({name: 'organization', required: true})
  organization: string;

  /**
   * A concept named Address
   */
  @property({name: 'address', required: true})
  address: Address;

}

