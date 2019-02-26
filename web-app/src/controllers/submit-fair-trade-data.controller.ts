/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { SubmitFairTradeData } from '../models/submit-fair-trade-data.model';
import { ResponseMessage } from '../models/response-message.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by submitFairTradeData
 * A transaction named submitFairTradeData
 */
export class SubmitFairTradeDataController {
  constructor() { }

  /**
   *
   *

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/submitFairTradeData')
  async submitFairTradeDataCreate(@requestBody() requestBody: SubmitFairTradeData): Promise<ResponseMessage> {

    try {
      console.log('submitFairTradeData, requestBody: ')


      console.log('request body: ')
      console.log(requestBody)

      let networkObj = await blockchainClient.connectToNetwork();
      console.log('newtork obj: ')
      console.log(networkObj)
      let dateStr = new Date().toDateString();
      // dateStr = dateStr.toDateString();
      let dataForFairTrade = {
        function: 'submitFairTradeData',
        reportName: requestBody.reportName,
        orgDescription: requestBody.organizationDescription,
        reportYear: requestBody.reportYear,
        fairTradePremiumInvested: requestBody.fairtradePremiumInvested,
        investmentTitle1: requestBody.investmentTitle1,
        investmentAmount1: requestBody.investmentAmount1,
        investmentTitle2: requestBody.investmentTitle2,
        investmentAmount2: requestBody.investmentAmount2,
        investmentTitle3: requestBody.investmentTitle3,
        investmentAmount3: requestBody.investmentAmount3,
        batchId: requestBody.batchId,
        transactionId: requestBody.transactionId,
        timestamp: dateStr,
        contract: networkObj.contract
      };

      await blockchainClient.submitFairTradeData(dataForFairTrade);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Fair Trade Data to Blockchain' });
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
  @operation('get', '/submitFairTradeData')
  async submitFairTradeDataFind(@param({ name: 'filter', in: 'query' }) filter: string): Promise<SubmitFairTradeData[]> {
    throw new Error('Not implemented');
  }

  /**
   *
   *

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/submitFairTradeData/{id}')
  async submitFairTradeDataFindById(@param({ name: 'id', in: 'path' }) id: string, @param({ name: 'filter', in: 'query' }) filter: string): Promise<SubmitFairTradeData> {
    throw new Error('Not implemented');
  }

}

