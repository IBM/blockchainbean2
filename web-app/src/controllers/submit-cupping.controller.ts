/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {SubmitCupping} from '../models/submit-cupping.model';
import { Address } from '../models/address.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by submitCupping
 * A transaction named submitCupping
 */
export class SubmitCuppingController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/submitCupping')
  async submitCuppingCreate(@requestBody() requestBody: SubmitCupping): Promise<SubmitCupping> {

    console.log('submitCupping, requestBody: ')
    console.log(requestBody)

    let networkObj = await blockchainClient.connectToNetwork();
    console.log('newtork obj: ')
    console.log(networkObj)
    let dateStr = new Date().toDateString();  

    let dataForCupping = {
      function: 'submitCupping',
      cupper: requestBody.cupper,
      aroma: requestBody.aroma,
      flavor: requestBody.flavor,
      afterTaste: requestBody.afterTaste,
      acidity: requestBody.acidity,
      body: requestBody.body,
      finalScore: requestBody.finalScore,
      batchId: requestBody.batchId,
      transactionId: requestBody.transactionId,
      timestamp: requestBody.timestamp,
      contract: networkObj.contract
    };

    var result = await blockchainClient.submitCupping(dataForCupping);

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
  @operation('get', '/submitCupping')
  async submitCuppingFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<SubmitCupping[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitCupping/{id}')
  async submitCuppingFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<SubmitCupping> {
    throw new Error('Not implemented');
  }

}

