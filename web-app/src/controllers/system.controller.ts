/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {PingResponse} from '../models/ping-response.model';
import {IssueIdentityRequest} from '../models/issue-identity-request.model';
import {BindIdentityRequest} from '../models/bind-identity-request.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by System
 * General business network methods
 */
export class SystemController {
  constructor() {}

  /**
   * 
   * 

   * @returns Request was successful
   */
  @operation('get', '/system/ping')
  async systemPing(): Promise<PingResponse> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @returns Request was successful
   */
  @operation('get', '/system/identities')
  async systemGetAllIdentities(): Promise<{
  
}[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   * @returns Request was successful
   */
  @operation('get', '/system/identities/{id}')
  async systemGetIdentityById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody 
   * @returns Request was successful
   */
  @operation('post', '/system/identities/issue')
  async systemIssueIdentity(@requestBody() requestBody: IssueIdentityRequest): Promise<Buffer> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody 
   */
  @operation('post', '/system/identities/bind')
  async systemBindIdentity(@requestBody() requestBody: BindIdentityRequest): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   */
  @operation('post', '/system/identities/{id}/revoke')
  async systemRevokeIdentity(@param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @returns Request was successful
   */
  @operation('get', '/system/historian')
  async systemGetAllHistorianRecords(): Promise<{
  
}[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   * @returns Request was successful
   */
  @operation('get', '/system/historian/{id}')
  async systemGetHistorianRecordById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

}

