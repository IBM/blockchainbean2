/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import {Condition} from './condition.model';

/**
 * The model class is generated from OpenAPI schema - Coffee
 * An asset named Coffee
 */
@model({name: 'Coffee'})
export class Coffee {
  constructor(data?: Partial<Coffee>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.ibm.coffee.Coffee';

  /**
   * The instance identifier for this type
   */
  @property({name: 'batchId', required: true})
  batchId: string;

  /**
   * 
   */
  @property({name: 'size', required: true})
  size: 'SMALL' | 'MEDIUM' | 'LARGE';

  /**
   * 
   */
  @property({name: 'roast', required: true})
  roast: 'LIGHT' | 'MEDIUM' | 'DARK';

  /**
   * 
   */
  @property({name: 'batchState', required: true})
  batchState: 'READY_FOR_DISTRIBUTION' | 'ORGANIC_CERTIFICATION_APPROVED' | 'REGULATION_TEST_PASSED' | 'IMPORTED' | 'READY_FOR_SALE';

  /**
   * 
   */
  @property({name: 'reportName'})
  reportName?: string;

  /**
   * 
   */
  @property({name: 'organizationDescription'})
  organizationDescription?: string;

  /**
   * 
   */
  @property({name: 'reportYear'})
  reportYear?: number;

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
  @property({name: 'PL_Invoice_no'})
  PL_Invoice_no?: string;

  /**
   * 
   */
  @property({name: 'PL_IssueDate'})
  PL_IssueDate?: Date;

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
  @property({name: 'dateStripped'})
  dateStripped?: Date;

  /**
   * 
   */
  @property({name: 'marks'})
  marks?: string;

  /**
   * 
   */
  @property({name: 'bagsExpected'})
  bagsExpected?: number;

  /**
   * A concept named Condition
   */
  @property({name: 'condition'})
  condition?: Condition;

  /**
   * 
   */
  @property({name: 'insectActivity'})
  insectActivity?: boolean;

  /**
   * 
   */
  @property({name: 'date'})
  date?: Date;

  /**
   * 
   */
  @property({name: 'cupper'})
  cupper?: string;

  /**
   * 
   */
  @property({name: 'aroma'})
  aroma?: number;

  /**
   * 
   */
  @property({name: 'flavor'})
  flavor?: number;

  /**
   * 
   */
  @property({name: 'afterTaste'})
  afterTaste?: number;

  /**
   * 
   */
  @property({name: 'acidity'})
  acidity?: number;

  /**
   * 
   */
  @property({name: 'body'})
  body?: number;

  /**
   * 
   */
  @property({name: 'finalScore'})
  finalScore?: number;

  /**
   * The identifier of an instance of owner
   */
  @property({name: 'owner', required: true})
  owner: {
  
};

}

