/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { ResponseMessage } from '../models/response-message.model';
import { SubmitInboundWeightTally } from '../models/submit-inbound-weight-tally.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by submitInboundWeightTally
 * A transaction named submitInboundWeightTally
 */
export class SubmitInboundWeightTallyController {
  constructor() { }

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

  @operation('post', '/submitInboundWeightTally', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async submitInboundWeightTallyCreate(@requestBody() requestBody: SubmitInboundWeightTally): Promise<ResponseMessage> {

    try {

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

      await blockchainClient.submitWeightTally(dataForFairTrade);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added WeightTally to Blockchain' });
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
  @operation('get', '/submitInboundWeightTally')
  async submitInboundWeightTallyFind(@param({ name: 'filter', in: 'query' }) filter: string): Promise<SubmitInboundWeightTally[]> {
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
  async submitInboundWeightTallyFindById(@param({ name: 'id', in: 'path' }) id: string, @param({ name: 'filter', in: 'query' }) filter: string): Promise<SubmitInboundWeightTally> {
    throw new Error('Not implemented');
  }

}

