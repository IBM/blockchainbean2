const yaml = require('js-yaml');
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');

// A wallet stores a collection of identities for use
const wallet = new FileSystemWallet('./local_fabric/wallet');


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
        const contract = await network.getContract('papercontract');


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

    async redeem(args: any) {

      console.log('args for redeem: ')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.issuer, args.paperNumber, args.redeemingOwner, args.redeemDateTime
      );

      return response;
    }




    async issue(args: any) {

      console.log('args for issue: ')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.issuer, args.paperNumber, args.issueDateTime, args.maturityDateTime,
        args.faceValue
      );

      return response;

    }

    async buy(args: any) {

      console.log('args for buy: ')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.issuer, args.paperNumber, args.currentOwner, args.newOwner,
        args.price, args.purchaseDateTime
      );

      return response;

    }


    async queryByKey(keyPassed: any) {

      let response = await keyPassed.contract.submitTransaction('query', keyPassed.id);
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
  }
}

