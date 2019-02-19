/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {PourCup} from '../models/pour-cup.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by pourCup
 * A transaction named pourCup
 */
export class PourCupController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/pourCup')
  async pourCupCreate(@requestBody() requestBody: PourCup): Promise<PourCup> {
    // @property({name: 'cupId', required: true})
    // cupId: string;
  
    // /**
    //  * The instance identifier for this type
    //  */
    // @property({name: 'transactionId'})
    // transactionId?: string;
  
    // /**
    //  * 
    //  */
    // @property({name: 'timestamp'})
    // timestamp?: string;  

    console.log('pourCup, requestBody: ')
    console.log(requestBody)

    let networkObj = await blockchainClient.connectToNetwork();
    console.log('newtork obj: ')
    console.log(networkObj)
    let dateStr = new Date().toDateString();
    // dateStr = dateStr.toDateString();
    let dataForPourCup = {
      function: 'pourCup',
      cupId: requestBody.cupId,
      batchId: requestBody.batchId,
      transactionId: requestBody.transactionId,
      contract: networkObj.contract
    };

    var result = await blockchainClient.pourCup(dataForPourCup);

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
  @operation('get', '/pourCup')
  async pourCupFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<PourCup[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/pourCup/{id}')
  async pourCupFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<PourCup> {
    throw new Error('Not implemented');
  }

}

