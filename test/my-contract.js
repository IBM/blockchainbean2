/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { MyContract } = require('..');

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
    }

}

describe('MyContract', () => {

    describe('#instantiate', () => {

        it('should work', async () => {
            const contract = new MyContract();
            const ctx = new TestContext();
            await contract.instantiate(ctx);
        });

    });

    describe('#transaction1', () => {

        it('should work', async () => {
            const contract = new MyContract();
            const ctx = new TestContext();
            await contract.transaction1(ctx, 'hello');
        });

    });

    describe('#transaction2', () => {

        it('should work', async () => {
            const contract = new MyContract();
            const ctx = new TestContext();
            await contract.transaction2(ctx, 'hello', 'world');
        });

    });

});
