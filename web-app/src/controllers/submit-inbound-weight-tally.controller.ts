/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {SubmitInboundWeightTally} from '../models/submit-inbound-weight-tally.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by submitInboundWeightTally
 * A transaction named submitInboundWeightTally
 */
export class SubmitInboundWeightTallyController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */

  
//  @property({name: 'dateStripped'})
//  dateStripped?: string;
//  @property({name: 'marks'})
//  marks?: string;
//  @property({name: 'bagsExpected'})
//  bagsExpected?: string;
//  @property({name: 'condition'})
//  condition?: string;
//  @property({name: 'insectActivity'})
//  insectActivity?: string;
//  @property({name: 'batchId', required: true})
//  batchId: string;
//  @property({name: 'transactionId'})
//  transactionId?: string;
//  @property({name: 'timestamp'})
//  timestamp?: string;

  @operation('post', '/submitInboundWeightTally')
  async submitInboundWeightTallyCreate(@requestBody() requestBody: SubmitInboundWeightTally): Promise<SubmitInboundWeightTally> {

    console.log('submitInboundWeighTally, requestBody: ')
    console.log(requestBody)

    let networkObj = await blockchainClient.connectToNetwork();
    console.log('newtork obj: ')
    console.log(networkObj)
    let dateStr = new Date().toDateString();
    // dateStr = dateStr.toDateString();
    let dataForFairTrade = {
      function: 'submitWeightTally',
      dateStripped: requestBody.dateStripped,
      marks: requestBody.marks,
      bagsExpected: requestBody.bagsExpected,
      condition: requestBody.condition,
      insectActivity: requestBody.insectActivity,
      batchId: requestBody.batchId,
      transactionId: requestBody.transactionId,
      timestamp: dateStr,
      contract: networkObj.contract
    };

    var result = await blockchainClient.submitWeightTally(dataForFairTrade);

    console.log('result from blockchainClient.submitTransaction in controller: ')
    console.log(result.toString())

    //$to do: return blockchain hash or confirmation rather than the request
    return result;        
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitInboundWeightTally')
  async submitInboundWeightTallyFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<SubmitInboundWeightTally[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitInboundWeightTally/{id}')
  async submitInboundWeightTallyFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<SubmitInboundWeightTally> {
    throw new Error('Not implemented');
  }

}

