<!-- [![Build Status](https://travis-ci.org/IBM/blockchainbean.svg?branch=master)](https://travis-ci.org/IBM/blockchainbean) -->

# Create a fair trade supply network with Hyperledger Fabric and IBM Blockchain Platform 2.0 Beta

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

In your browser, go to http://localhost:3000/explorer/

and click on `GrowerController`.



 













