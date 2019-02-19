/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - BindIdentityRequest
 * The request to the bindIdentity method
 */
@model({name: 'BindIdentityRequest'})
export class BindIdentityRequest {
  constructor(data?: Partial<BindIdentityRequest>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'participant'})
  participant?: string;

  /**
   * 
   */
  @property({name: 'certificate', required: true})
  certificate: string;

}

