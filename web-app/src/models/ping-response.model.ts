/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - PingResponse
 * The response to the ping method
 */
@model({name: 'PingResponse'})
export class PingResponse {
  constructor(data?: Partial<PingResponse>) {
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
  @property({name: 'identity'})
  identity?: string;

  /**
   * 
   */
  @property({name: 'version', required: true})
  version: string;

}

