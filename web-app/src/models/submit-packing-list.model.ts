/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - submitPackingList
 * A transaction named submitPackingList
 */
@model({name: 'submitPackingList'})
export class SubmitPackingList {
  constructor(data?: Partial<SubmitPackingList>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }
  /**
   * The identifier of an instance of grower
   */
  @property({name: 'grower'})
  grower?: string;

  /**
   * The identifier of an instance of trader
   */
  @property({name: 'trader'})
  trader?: string;


  /**
   * 
   */
  @property({name: 'PL_Invoice_no'})
  PL_Invoice_no?: string;

  /**
   * 
   */
  @property({name: 'PL_IssueDate'})
  PL_IssueDate?: string;

  /**
   * 
   */
  @property({name: 'PL_ICO_no'})
  PL_ICO_no?: string;

  /**
   * 
   */
  @property({name: 'PL_ICO_Lot'})
  PL_ICO_Lot?: string;

  /**
   * 
   */
  @property({name: 'PL_FDA_NO'})
  PL_FDA_NO?: string;

  /**
   * 
   */
  @property({name: 'PL_Bill_of_Lading_No'})
  PL_Bill_of_Lading_No?: string;

  /**
   * 
   */
  @property({name: 'PL_LoadedVessel'})
  PL_LoadedVessel?: string;

  /**
   * 
   */
  @property({name: 'PL_VesselVoyage_No'})
  PL_VesselVoyage_No?: string;

  /**
   * 
   */
  @property({name: 'PL_Container_No'})
  PL_Container_No?: string;

  /**
   * 
   */
  @property({name: 'PL_Seal_no'})
  PL_Seal_no?: string;

  /**
   * 
   */
  @property({name: 'PL_timestamp'})
  PL_timestamp?: string;

  /**
   * 
   */
  @property({name: 'batchId', required: true})
  batchId: string;

  /**
   * The instance identifier for this type
   */
  @property({name: 'transactionId'})
  transactionId?: string;

  /**
   * 
   */
  @property({name: 'timestamp'})
  timestamp?: string;

}

