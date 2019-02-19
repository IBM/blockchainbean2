/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - IssueIdentityRequest
 * The request to the issueIdentity method
 */
@model({name: 'IssueIdentityRequest'})
export class IssueIdentityRequest {
  constructor(data?: Partial<IssueIdentityRequest>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property({name: 'participant', required: true})
  participant: string;

  /**
   * 
   */
  @property({name: 'userID', required: true})
  userID: string;

  /**
   * 
   */
  @property({name: 'options'})
  options?: {
  
};

}

