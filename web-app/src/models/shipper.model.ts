/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import {Address} from './address.model';

/**
 * The model class is generated from OpenAPI schema - Shipper
 * A participant named Shipper
 */
@model({name: 'Shipper'})
export class Shipper {
  constructor(data?: Partial<Shipper>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.coffee.Shipper';

  /**
   * The instance identifier for this type
   */
  @property({name: 'shipperId', required: true})
  shipperId: string;

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

