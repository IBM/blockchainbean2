/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Address
 * A concept named Address
 */
@model({name: 'Address'})
export class Address {
  constructor(data?: Partial<Address>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.coffee.Address';

  /**
   * 
   */
  @property({name: 'city'})
  city?: string;

  /**
   * 
   */
  @property({name: 'country', required: true})
  country: string;

  /**
   * 
   */
  @property({name: 'street'})
  street?: string;

  /**
   * 
   */
  @property({name: 'zip'})
  zip?: string;


}

