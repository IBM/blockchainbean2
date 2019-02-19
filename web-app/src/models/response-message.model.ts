import { model, property } from '@loopback/repository';

@model({ name: 'ResponseMessage' })
export class ResponseMessage {

  constructor(data?: Partial<ResponseMessage>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  @property({ name: 'message', required: true })
  message: string = 'OK';

  @property({ name: 'statusCode', required: true })
  statusCode: string = '200';
}
