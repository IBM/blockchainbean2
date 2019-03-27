import { Request, RestBindings, get, operation, requestBody, ResponseObject, param, HttpErrors } from '@loopback/rest';
import { inject } from '@loopback/context';
import { ResponseMessage } from '../models/response-message.model';
import { Shipper } from '../models/shipper.model';
import { Address } from '../models/address.model';
import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();


export class ShipperController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }

  /**
  * @param requestBody Model instance data
  * @returns Request was successful
  */

  @operation('post', '/Shipper', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async shipperCreate(@requestBody() requestBody: Shipper): Promise<ResponseMessage> {

    try {
      let networkObj = await blockchainClient.connectToNetwork();
      let dataForAddMember = {
        function: 'addMember',
        id: requestBody.shipperId,
        organization: requestBody.organization,
        address: `${requestBody.address.street} ${requestBody.address.city} ${requestBody.address.zip} ${requestBody.address.country}`,
        memberType: 'shipper',
        contract: networkObj.contract
      };

      await blockchainClient.addMember(dataForAddMember);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Shipper to Blockchain' });
      return responseMessage;

    } catch (error) {
      let responseMessage: ResponseMessage = new ResponseMessage({ message: error, statusCode: '400' });
      return responseMessage;
    }
  }
}
