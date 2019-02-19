<!-- [![Build Status](https://travis-ci.org/IBM/blockchainbean.svg?branch=master)](https://travis-ci.org/IBM/blockchainbean) -->

# Create a fair trade supply network with Hyperledger Fabric and IBM Blockchain Platform 2.0 Beta

This code pattern is based on a recent proof-of-concept developed in collaboration with a coffee roasting company that was nice enough to let us use their supply-chain documents. The link to the application that the code pattern is based off of is here: https://www.ibm.com/thought-leadership/blockchainbean/

The finished product has a UI that interacts with our blockchain client app (in the 
form of a Loopback API) which allows you to query for cups of coffee that are poured. 
Each cup has a history based on which batch of coffee was used make the cup, which you 
can see below. Additionally, you can see other details such as who poured the cup, 
at what time the cup was poured, which type of beans were used, etc.

![packageFile](/docs/bean.png)


All documents that were used in the supply chain are available online, and can be found by clicking the view the blockchain button at https://www.ibm.com/thought-leadership/blockchainbean/

In this Code Pattern we will create a blockchain app that increases visibility and efficiency in the supply chain of a coffee retailer. We will use different transactions to show different possible actions for the different participants in the supply chain. This sample application will record all transactions on the IBM Blockchain V2 Beta, and enable a coffee retailer to ensure the customer that their coffee is organic and fair-trade. The Code Pattern can be useful to developers that are looking into learning more about creating applications that integrate supply chains with Hyperledger Fabric.

When the reader has completed this Code Pattern, they will understand how to:

Interact with the (free) IBM Blockchain Platform V2 Beta
Build a blockchain back-end using Hyperledger Fabric
Create and use a (free) Kubernetes Cluster
Deploy a Node.js app in the cloud that will interact with our smart contract

## Requirements

We will use the 
[IBM Blockchain Platform Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=IBMBlockchain.ibm-blockchain-platform) to package our smart contract. 

You will need the following installed in order to use the extension:
- [VSCode version 1.31 or greater](https://code.visualstudio.com)
- [Node v8.x or greater and npm v5.x or greater](https://nodejs.org/en/download/)
- [Yeoman (yo) v2.x](http://yeoman.io/)
- [Docker version v17.06.2-ce or greater](https://www.docker.com/get-docker)
- [Docker Compose v1.14.0 or greater](https://docs.docker.com/compose/install/)

> ⚠ Please note: From version 0.1.0+, your smart contract package.json should depend on at least fabric-contract@1.4.0-beta2. This is only required for smart contracts not created using version 0.1.0+ of this extension.

If you are using Windows, you must also ensure the following:
- Your version of Windows supports Hyper-V and Docker:
  - Windows 10 Enterprise, Pro, or Education with 1607 Anniversary Update or later
- Docker for Windows is configured to use Linux containers (this is the default)
- You have installed the C++ Build Tools for Windows from [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools#windows-build-tools)
- You have installed OpenSSL v1.0.2 from [Win32 OpenSSL](http://slproweb.com/products/Win32OpenSSL.html)
  - Install the normal version, not the version marked as "light"
  - Install the Win32 version into `C:\OpenSSL-Win32` on 32-bit systems
  - Install the Win64 version into `C:\OpenSSL-Win64` on 64-bit systems

If you require sudo/root to install npm modules, the extension won't be able to automatically install the generator that is used to create a smart contract project. You will need to run the following command to install the dependencies:

`npm install -g yo generator-fabric`

You can check your installed versions by running the following commands from a terminal:
- `node --version`
- `npm --version`
- `yo --version`
- `docker --version`
- `docker-compose --version`


# Steps (Local Deployment)

1. [Clone the Repo](#step-1-clone-the-repo)
2. [Install Dependencies](#step-2-install-dependencies)
3. [Package Contract](#step-3-package-contract)
4. [Install Contract](#step-4-install-contract)
5. [Instantiate Contract](#step-5-Instantiate-contract)
6. [Submit Transactions](#step-6-submit-transactions)

# Steps (Cloud Deployment - 🚧⚠️👷🏻‍🛑UNDER CONTRSTRUCTION 🚧⚠️👷🏻‍🛑)

## Step 1. Clone the Repo

Git clone this repo onto your computer in the destination of your choice, then go into the web-app folder:
```
HoreaPorutiu$ git clone https://github.com/horeaporutiu/blockchainbean2.git
```
Navigate to the `web-app` directory:
```
HoreaPorutiu$ cd blockchainbean2/web-app
```

## Step 2. Install Dependencies

Install required dependencies using NPM:
```
web-app$ npm install
```

## Step 3. Package Contract


![packageFile](/docs/rightClick.png)
Right-click under your folders in your workspace area and then click *Add Folder to Workspace* and then highlight the 
`blockchainbean/lib` directory as shown in the picture below, and then click on *add*:

![packageFile](/docs/addSmartContract.png)

 Next, we have to package the smart contract. Click on the *F1* button on your keyboard,
 which will bring up the VSCode command pallete. From there, navigate and click on `Package a Smart Contract Project`.
![packageFile](/docs/pack.png)


 Next, the extension will ask the following question:
 ```
 Choose a workspace folder to package
 ```
 Click on the *lib* folder - note we do not want to package our client (i.e. our web-app directory).

  ![packageFile](/docs/lib.png)

 If all went well, you should see the following. 

  ![packageFile](/docs/packageSuccess.png)
 
 Note that this `.cds` file is extremely important if we want to run 
 our smart contract on the cloud. 

## Step 4. Install Contract

 Next, it's time to install and instantiate our contract on the peer. First click on the blockchain icon in the 
 left side of VSCode. Once you click it, you should see `Smart Contract Packages` and the blockchainbean2@0.0.1 package 
 there. In my picture I have other contracts there as well.
![packageFile](/docs/blockchainView.png)

  Go ahead and start your local fabric by clicking on the 
 *three dot symbol* to the right of *LOCAL FABRIC OPS*
 and then *Start Fabric Runtime*. Once the runtime is finished starting, under *Local Fabric 
 Ops* you should see *Smart Contracts* and a section for both *installed* and *instantiated*.

![packageFile](/docs/contracts.png)

 Now, let's click on *+ Install* and choose the peer that is available. Then the extension will ask you which package to 
 install. Choose *blockchainbean2@0.0.1* as shown in the picture.
 
![packageFile](/docs/choosePackage.png)

 
  If all goes well, you should get a notification as shown 
 below.

![packageFile](/docs/successInstall.png)


## Step 5. Instantiate Contract
You guessed it. Next, it's time to instantiate. 
 
  Click on *+ Instantiate* 

![packageFile](/docs/instantiate.png)

and then choose 
 *mychannel* for the channel to instantiate the contract on.

![packageFile](/docs/channel.png)

Next, the extension will ask you 
 to choose a smart contract and version to instantiate. Click on *blockchainbean2@0.0.1*.
![packageFile](/docs/version.png)


 Next, for the optional function, type in *init*.
![packageFile](/docs/function.png)


Leave the arguments blank, and hit *enter* 
 on your keyboard. 
![packageFile](/docs/blank.png)


 This will instantiate the smart contract. You should see the contract 
 under the *instantiated* tab on the left-hand side, as shown in the picture. 

![packageFile](/docs/instantiated.png)


## Step 6. Submit Transactions
*Note that this step is the same whether for local or cloud deployment. The only 
different is that we will use queries to see the ledger locally, whereas on cloud 
we can view the ledger via the block explorer on IBM Blockchain Platform *


 Nice. We're pretty much ready to submit transactions on our contract. Go ahead and go 
 into your web-app directory and run the query script with the commands shown below. 

 ```
blockchainbean2$ cd web-app
web-app$ node query.js
```
Your output should be the following:

![packageFile](/docs/queryScript.png)


All we have done, is queried the ledger for all data. 
There is none, since we haven't added anything to the ledger. Ok. Now, let's add our first 
member to the ledger, the grower. To do this, we will start our web-app and interact with our
app to submit transactions to the network. 

### Add Members to the network
Let's bring up a new terminal window, and in that terminal, go to the blockchainbean2 directory that 
we cloned earlier, and start the app in that window with the following command.

 ```
blockchainbean2$ cd web-app
web-app$ npm start
```

In your browser, go to http://localhost:3000/explorer/ If all goes well, you should 
see something like the picture below:
![packageFile](/docs/loopback.png)


and click on `GrowerController`. You should see the Controller expand with the GET/POST methods.
Click on the green `POST/Grower` button and then `Try it out` to the right of the `POST/Grower` button.
This will enable you to write in a request body. Go ahead and copy and paste the following JSON in 
to the request body. P.S. (I have made all the commands available in the `commands.txt` file). 

```
{
  "$class": "org.ibm.coffee.Grower",
  "isFairTrade": true,
  "growerId": "Grower-0201",
  "organization": "Ethiopia Gedeb 1 Banko Gotiti GrainPro",
  "address": {
    "$class": "org.ibm.coffee.Address",
    "city": "Gedeb",
    "country": "Ethiopia",
    "street": "N/A",
    "zip": "N/A"
  }
}
```

Then click the blue `Execute` button under the request body. If all goes well, you should see something similar to 
the image below:

![packageFile](/docs/grower.png)

Great. We have made our first update to the ledger. To make sure things are actually updated,
go ahead and run the query script again: 

 ```
web-app$ node query.js
```

You should see the ledger to be as follows: 

![packageFile](/docs/update.png)

Nice! We made our first update to the ledger. While we're here, let's keep it going! 





 













