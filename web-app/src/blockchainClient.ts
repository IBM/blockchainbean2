
const yaml = require('js-yaml');
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');

// A wallet stores a collection of identities for use
const wallet = new FileSystemWallet('./../local_fabric/wallet');


export module BlockChainModule {

  export class BlockchainClient {
    async connectToNetwork() {

      const gateway = new Gateway();

      try {
        console.log('connecting to Fabric network...')


        const identityLabel = 'Admin@org1.example.com';
        let connectionProfile = yaml.safeLoad(fs.readFileSync('./network.yaml', 'utf8'));

        let connectionOptions = {
          identity: identityLabel,
          wallet: wallet,
          discovery: {
            asLocalhost: true
          }
        };

        // Connect to gateway using network.yaml file and our certificates in _idwallet directory
        await gateway.connect(connectionProfile, connectionOptions);

        console.log('Connected to Fabric gateway.');

        // Connect to our local fabric
        const network = await gateway.getNetwork('mychannel');

        console.log('Connected to mychannel. ');

        // Get the contract we have installed on the peer
        const contract = await network.getContract('blockchainbean2');


        let networkObj = {
          contract: contract,
          network: network
        };

        return networkObj;

      } catch (error) {
        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
      } finally {
        console.log('Done connecting to network.');
        // gateway.disconnect();
      }

    }

    async addMember(args: any) {
      //call addMember smart contract function
      //$TODO: dynamically call submitTransaction
      let response = await args.contract.submitTransaction(args.function,
        args.id, args.organization, args.address, args.memberType);
      return response;


    }



    async queryByKey2(contract: any, keyPassed: any) {

      // let str = 'query'
      // let response = await keyPassed.contract.submitTransaction('query', 'arg1', 'arg2');

      let response = await contract.evaluateTransaction('query', keyPassed);
      console.log('query by key response: ')
      console.log(JSON.parse(response.toString()))
      console.log(response.length)
      if (response.length === 2) {
        response = `${keyPassed} does not exist`;
        return response;
      }
      response = JSON.parse(response.toString());
      return response;

    }

    async queryAll(contract: any) {
      let response = await contract.evaluateTransaction('queryAll');
      console.log(response.toString())
      return response;
    }

    async queryByKey(keyPassed: any) {

      // let str = 'query'
      // let response = await keyPassed.contract.submitTransaction('query', 'arg1', 'arg2');

      let response = await keyPassed.contract.evaluateTransaction('query', keyPassed.id);
      console.log('query by key response: ')
      console.log(JSON.parse(response.toString()))
      console.log(response.length)
      if (response.length === 2) {
        response = `${keyPassed.id} does not exist`;
        return response;
      }
      response = JSON.parse(response.toString());
      return response;

    }

    async submitFairTradeData(args: any) {
      console.log('args in the blockchain client')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.reportName, args.orgDescription, args.reportYear, args.fairTradePremiumInvested,
        args.investmentTitle1, args.investmentAmount1, args.investmentAmount2, args.investmentTitle2,
        args.investmentAmount3, args.investmentTitle3, args.batchId, args.transactionId, args.timestamp);
      return response;

    }

    async submitCupping(args: any) {
      console.log('args in the blockchain client')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.cupper, args.aroma, args.flavor, args.afterTaste,
        args.acidity, args.body, args.finalScore, args.batchId,
        args.transactionId, args.timestamp);
      return response;

    }

    async submitPackingList(args: any) {
      console.log('args in the blockchain client, packing list')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.grower, args.trader, args.PL_Invoice_no, args.PL_IssueDate,
        args.PL_ICO_no, args.PL_ICO_Lot, args.PL_FDA_NO,
        args.PL_Bill_of_Lading_No, args.PL_LoadedVessel, args.PL_VesselVoyage_No,
        args.PL_Container_No, args.PL_Seal_no, args.PL_timestamp, args.batchId,
        args.transactionId, args.timestamp
      );

      return response;

    }

    async submitWeightTally(args: any) {
      console.log('args in the blockchain client,weight tally')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.dateStripped, args.marks, args.bagsExpected, args.condition,
        args.insectActivity, args.batchId, args.transactionId, args.timestamp
      );

      return response;

    }

    async addCoffee(args: any) {
      console.log('args in the blockchain client,addcoffee')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.size, args.roast, args.batchState, args.grower,
        args.transactionId, args.timestamp
      );

      return response;

    }

    async pourCup(args: any) {
      console.log('args in the blockchain client,addcoffee')
      console.log(args)


      let response = await args.contract.submitTransaction(args.function,
        args.cupId, args.batchId, args.transactionId
      );

      if (response.length === 2) {
        response = `batchId ${args.batchId} does not exist`;
        return response;
      }

      return response;

    }
  }
}

