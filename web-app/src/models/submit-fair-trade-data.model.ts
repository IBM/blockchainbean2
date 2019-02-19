/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - submitFairTradeData
 * A transaction named submitFairTradeData
 */
@model({name: 'submitFairTradeData'})
export class SubmitFairTradeData {
  constructor(data?: Partial<SubmitFairTradeData>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  /**
   * 
   */
  @property({name: 'reportName', required: true})
  reportName: string;

  /**
   * 
   */
  @property({name: 'organizationDescription'})
  organizationDescription?: string;

  /**
   * 
   */
  @property({name: 'reportYear'})
  reportYear?: string;

  /**
   * 
   */
  @property({name: 'fairtradePremiumInvested'})
  fairtradePremiumInvested?: string;

  /**
   * 
   */
  @property({name: 'investmentTitle1'})
  investmentTitle1?: string;

  /**
   * 
   */
  @property({name: 'investmentAmount1'})
  investmentAmount1?: string;

  /**
   * 
   */
  @property({name: 'investmentTitle2'})
  investmentTitle2?: string;

  /**
   * 
   */
  @property({name: 'investmentAmount2'})
  investmentAmount2?: string;

  /**
   * 
   */
  @property({name: 'investmentTitle3'})
  investmentTitle3?: string;

  /**
   * 
   */
  @property({name: 'investmentAmount3'})
  investmentAmount3?: string;

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

