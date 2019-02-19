/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import {Address} from './address.model';

/**
 * The model class is generated from OpenAPI schema - Retailer
 * A participant named Retailer
 */
@model({name: 'Retailer'})
export class Retailer {
  constructor(data?: Partial<Retailer>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.coffee.Retailer';

  /**
   * The instance identifier for this type
   */
  @property({name: 'retailerId', required: true})
  retailerId: string;

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

