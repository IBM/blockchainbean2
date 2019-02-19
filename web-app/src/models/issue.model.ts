// Copyright IBM Corp. 2017,2018. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, model, property} from '@loopback/repository';

@model()
export class Issue extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  issuer: string;

  @property({
    type: 'string',
    required: true,
  })
  paperNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  issueDateTime: string;

  @property({
    type: 'string',
    required: true,
  })
  maturityDateTime?: string;

  @property({
    type: 'string',
  })
  faceValue?: string; // address,city,zipcode

  constructor(data?: Partial<Issue>) {
    super(data);
  }
}
