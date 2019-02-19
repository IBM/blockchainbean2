/* tslint:disable:no-any */
import { operation, param, requestBody } from '@loopback/rest';
import { Retailer } from '../models/retailer.model';
import { Address } from '../models/address.model';
import { BlockChainModule } from '../blockchainClient';
import { ResponseMessage } from '../models/response-message.model';

let blockchainClient = new BlockChainModule.BlockchainClient();
/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Retailer
 * A participant named Retailer
 */
export class RetailerController {
  constructor() { }

  /**
   *
   *

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Retailer', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async retailerCreate(@requestBody() requestBody: Retailer): Promise<ResponseMessage> {

    try {
      let networkObj = await blockchainClient.connectToNetwork();
      let dataForAddMember = {
        function: 'addMember',
        id: requestBody.retailerId,
        organization: requestBody.organization,
        address: `${requestBody.address.street} ${requestBody.address.city} ${requestBody.address.zip} ${requestBody.address.country}`,
        memberType: 'retailer',
        contract: networkObj.contract
      };

      await blockchainClient.addMember(dataForAddMember);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Retailer to Blockchain' });
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
  @operation('get', '/Retailer')

  async retailerFind(@param({ name: 'filter', in: 'query' }) filter: string): Promise<Retailer[]> {
    throw new Error('Not implemented');
  }

  /**
   *
   *

   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/Retailer/{id}')
  async retailerExists(@param({ name: 'id', in: 'path' }) id: string): Promise<{
    exists?: boolean;
  }> {
    throw new Error('Not implemented');
  }

  /**
   *
   *

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Retailer/{id}', {
    responses: {
      '200': {
        description: 'Shipper model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Retailer } } },
      },
    },
  })

  async retailerFindById(@param({ name: 'id', in: 'path' }) id: string, @param({ name: 'filter', in: 'query' }) filter: string): Promise<Retailer> {

    let networkObj = await blockchainClient.connectToNetwork();
    let dataForQuery = {
      function: 'query',
      id: id,
      contract: networkObj.contract,
      network: networkObj.network
    };

    console.log('before blockchainClient.queryByKey')
    let result = await blockchainClient.queryByKey(dataForQuery);
    console.log(`lookup by key ${id}`);
    console.log('result after calling client.queryByKey: ')
    console.log(result)
    if (result.id) {
      var rez = JSON.parse(result.toString());
      console.log(rez)
      let address = new Address({ city: rez.address, country: rez.address, street: rez.address });
      let retailer = new Retailer({ retailerId: rez.id, organization: rez.organization, address: address });
      return retailer;
    }
    return result;


  }

  /**
   *
   *

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  @operation('put', '/Retailer/{id}')
  async retailerReplaceById(@requestBody() requestBody: Retailer, @param({ name: 'id', in: 'path' }) id: string): Promise<Retailer> {
    throw new Error('Not implemented');
  }

  /**
   *
   *

   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/Retailer/{id}')
  async retailerDeleteById(@param({ name: 'id', in: 'path' }) id: string): Promise<{

  }> {
    throw new Error('Not implemented');
  }

}

