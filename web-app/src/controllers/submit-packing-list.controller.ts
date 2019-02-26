/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { SubmitPackingList } from '../models/submit-packing-list.model';
import { ResponseMessage } from '../models/response-message.model';
import { Address } from '../models/address.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by submitPackingList
 * A transaction named submitPackingList
 */
export class SubmitPackingListController {
  constructor() { }

  /**
   *
   *

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/submitPackingList', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async submitPackingListCreate(@requestBody() requestBody: SubmitPackingList): Promise<ResponseMessage> {

    try {

      let networkObj = await blockchainClient.connectToNetwork();
      console.log('newtork obj: ')
      console.log(networkObj)
      let dateStr = new Date().toDateString();

      let dataForCupping = {
        function: 'submitPackingList',
        grower: requestBody.grower,
        trader: requestBody.trader,
        PL_Invoice_no: requestBody.PL_Invoice_no,
        PL_IssueDate: requestBody.PL_IssueDate,
        PL_ICO_no: requestBody.PL_ICO_no,
        PL_ICO_Lot: requestBody.PL_ICO_Lot,
        PL_FDA_NO: requestBody.PL_FDA_NO,
        PL_Bill_of_Lading_No: requestBody.PL_Bill_of_Lading_No,
        PL_LoadedVessel: requestBody.PL_LoadedVessel,
        PL_VesselVoyage_No: requestBody.PL_VesselVoyage_No,
        PL_Container_No: requestBody.PL_Container_No,
        PL_Seal_no: requestBody.PL_Seal_no,
        PL_timestamp: requestBody.PL_timestamp,
        batchId: requestBody.batchId,
        transactionId: requestBody.transactionId,
        timestamp: requestBody.timestamp,
        contract: networkObj.contract
      };

      await blockchainClient.submitPackingList(dataForCupping);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added packing list to Blockchain' });
      return responseMessage;

    } catch (error) {
      let responseMessage: ResponseMessage = new ResponseMessage({ message: error, statusCode: '400' });
      return responseMessage;
    }
  }

  /**
   *
   *
  
   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitPackingList')
  async submitPackingListFind(@param({ name: 'filter', in: 'query' }) filter: string): Promise<SubmitPackingList[]> {
    throw new Error('Not implemented');
  }

  /**
   *
   *
  
   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitPackingList/{id}')
  async submitPackingListFindById(@param({ name: 'id', in: 'path' }) id: string, @param({ name: 'filter', in: 'query' }) filter: string): Promise<SubmitPackingList> {
    throw new Error('Not implemented');
  }

}

