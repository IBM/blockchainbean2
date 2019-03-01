<!-- [![Build Status](https://travis-ci.org/IBM/blockchainbean.svg?branch=master)](https://travis-ci.org/IBM/blockchainbean) -->

# Create a fair trade supply network with Hyperledger Fabric and IBM Blockchain Platform 2.0 Beta

To try the supply chain network API - go here: http://blockchainbeans2.mybluemix.net/


This code pattern is based on a recent proof-of-concept developed in collaboration with a coffee roasting company that was nice enough to let us use their supply-chain documents. The finished product of this code pattern is a cloud-based blockchain API, that any other UI app can call. An example UI app that leverages our blockchain API can be found [here](https://www.ibm.com/thought-leadership/blockchainbean/).


Each cup has a history based on which batch of coffee was used make the cup, which you 
can see below. Additionally, you can see other details such as who poured the cup, 
at what time the cup was poured, which type of beans were used, etc. on the [your cup](https://www.ibm.com/thought-leadership/blockchainbean/yourcup/index.html)
page. Hint, try cupId 'NJB123' for the result shown below.

![packageFile](/docs/bean.png)


All documents that were used in the supply chain are available online, and can be found by clicking the view the blockchain button at https://www.ibm.com/thought-leadership/blockchainbean/

In this Code Pattern we will create a blockchain app that increases visibility and efficiency in the supply chain of a coffee retailer. We will use different transactions to show different possible actions for the different participants in the supply chain. This sample application will record all transactions on the IBM Blockchain V2 Beta, and enable a coffee retailer to ensure the customer that their coffee is organic and fair-trade. The Code Pattern can be useful to developers that are looking into learning more about creating applications that integrate supply chains with Hyperledger Fabric.

When the reader has completed this Code Pattern, they will understand how to:

* Interact with the (free) IBM Blockchain Platform V2 Beta
* Build a blockchain back-end using Hyperledger Fabric
* Create and use a (free) Kubernetes Cluster
* Deploy a Node.js app in the cloud that will interact with our smart contract

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

# Steps (Cloud Deployment)

7. [Create IBM Cloud services](#step-7-create-ibm-cloud-services)
8. [Build a network](#step-8-build-a-network)
9. [Deploy blockchainbean2 Smart Contract on the network](#step-9-deploy-fabcar-smart-contract-on-the-network)
10. [Connect application to the network](#step-10-connect-application-to-the-network)
11. [Run the application](#step-11-run-the-application)

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
web-app$ npm install --ignore-scripts
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

⚠️ if you get a grpc error run:
```sh
web-app$ npm rebuild
web-app$ node query.js
``` 
and 
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

Add the trader - go to `/POST/Trader` and then follow the same steps as above,
except add in the following json:

```
{
  "$class": "org.ibm.coffee.Trader",
  "traderId": "Trader-0791",
  "organization": "Royal Coffee New York",
  "address": {
    "$class": "org.ibm.coffee.Address",
    "city": "South Plainfield",
    "country": "USA"
  }
}
```

Same thing with the shipper now:

```
{
  "$class": "org.ibm.coffee.Shipper",
  "shipperId": "Maersk",
  "organization": "A.P. Moller–Maersk Group",
  "address": {
    "$class": "org.ibm.coffee.Address",
    "city": "Copenhagen",
    "country": "Denmark",
    "street": "N/A",
    "zip": "N/A"
  }
}
```

And the retailer: 
```
{
  "$class": "org.ibm.coffee.Retailer",
  "retailerId": "BrooklynRoasting",
  "organization": "Brooklyn Roasting Company",
  "address": {
    "$class": "org.ibm.coffee.Address",
    "city": "Brooklyn",
    "country": "USA",
    "street": "25 Jay St",
    "zip": "11201"
  }
}
```

And last but not least, the regulator :) 

```
{
  "$class": "org.ibm.coffee.Regulator",
  "regulatorId": "ICO",
  "organization": "International Coffee Organization",
  "address": {
    "$class": "org.ibm.coffee.Address",
    "city": "London",
    "country": "England",
    "street": "22 Berners Street",
    "zip": "N/A"
  }
}
```

Now if we run our usual `node query` we should get the following output 
i.e. all of the members we just added.

```
Submit hello world transaction.
"[{\"Key\":\"BrooklynRoasting\",\"Record\":{\"address\":\"25 Jay St Brooklyn 11201 USA\",\"id\":\"BrooklynRoasting\",\"memberType\":\"retailer\",\"organization\":\"Brooklyn Roasting Company\"}},{\"Key\":\"Grower-0201\",\"Record\":{\"address\":\"N/A Gedeb N/A Ethiopia\",\"id\":\"Grower-0201\",\"memberType\":\"grower\",\"organization\":\"Ethiopia Gedeb 1 Banko Gotiti GrainPro\"}},{\"Key\":\"ICO\",\"Record\":{\"address\":\"22 Berners Street London N/A England\",\"id\":\"ICO\",\"memberType\":\"regulator\",\"organization\":\"International Coffee Organization\"}},{\"Key\":\"Maersk\",\"Record\":{\"address\":\"N/A Copenhagen N/A Denmark\",\"id\":\"Maersk\",\"memberType\":\"shipper\",\"organization\":\"A.P. Moller–Maersk Group\"}},{\"Key\":\"Trader-0791\",\"Record\":{\"address\":\"661 Hadley Rd South Plainfield 07080 USA\",\"id\":\"Trader-0791\",\"memberType\":\"trader\",\"organization\":\"Royal Coffee New York\"}}]"
Disconnect from Fabric gateway.
```

Nice. Let's add some coffee on our chain. That's what the whole point of this was, 
right?

### Add Coffee to the network

Let's do a `/POST/addCoffee` with the following request body:

```
{
  "size": "LARGE",
  "roast": "DARK",
  "batchState": "READY_FOR_DISTRIBUTION",
  "grower": "Grower-0201",
  "transactionId": "txId",
  "timestamp": "4:17PM, Feb 19. 2019"
}
```

Great. At this point, we have a batch of coffee (around 100KG) or so, that 
we are ready to ship across the ocean. But first, we have to upload data from
documents that verify that we are in paying a `fair-trade` price for our coffee.

To do this, we must reference the batchId of coffee we have just created. 
The application randomly assigns a batchId each time we call /POST/addCoffee.

Let's run our query to get our batchId:

 ```
web-app$ node query.js
```

My response (edited) is the following: 

```
{\"Key\":\"hz4dzq6ilk\",\"Record\":{\"batchId\":\"hz4dzq6ilk\",\"batchState\":\"READY_FOR_DISTRIBUTION\",\"grower\":\"Grower-0201\",\"roast\":\"DARK\",\"size\":\"LARGE\",\"timestamp\":\"Tue Feb 19 2019\",\"transactionId\":\"txId\"}}]"
```

From there, I can see my batchId is `hz4dzq6ilk`. We will need this later on.

### Add Supply Chain Data to the Network

Cool. Let's update our fair trade data. Got to `/POST/submitFairTradeData` 
and submit a transaction with the following JSON. 🛑IMPORTANT - you must 
use your own batchId for this to work!! 🛑 (I will keep using this one
`hz4dzq6ilk` but yours will be different!)

Note - we are playing the part of the buyer of the coffee now - in a real-life 
network, I would have to authenticate (with API KEY, or some other security 
mechanism) that I am the buyer of the coffee, and that these reports are for the 
coffee I bought. Let's update the fair trade data from the point of view of the buyer.

```
{
  "reportName": "Fair Trade Coffee Supply Chain Report",
  "organizationDescription": "YCFCU is an Ethiopian coffee producing, processing, and exporting cooperative union founded in 2002. YCFCU represents 23 base level cooperatives, all located in the Gedeo Zone, within the Southern NationsNationalities and Peope (SNNPR) ethnically-based region of Ethiopia. Given that its members depend on coffee as their sole source of income, YCFCU aims to maximize financial returns to its members through its linkages with international markets.",
  "reportYear": "2016",
  "fairtradePremiumInvested": "$182273",
  "investmentTitle1": "School Classroom Addition",
  "investmentAmount1": "$30,626",
  "investmentTitle2": "Road Infrastructure",
  "investmentAmount2": "$43,251",
  "investmentTitle3": "Food Security",
  "investmentAmount3": "$34,411",
  "batchId": "hz4dzq6ilk",
  "transactionId": "7bde4711554a69ff336551b4acbb465648355cbf2b80f6218d3cee59593fe3b3",
  "timestamp": "2018-07-18T02:08:54.365Z"
}
```

Next, let's play the part of the shipper. In a live network the shipper 
would authenticate into the network, and would be allow to /POST (update) 
the ledger with the packing list controller. 

Let's do a /POST/SubmitPackingListController with the following json,
but don't forget to use ***YOUR OWN batchId*** :) :

```
{
  "grower": "resource:org.ibm.coffee.Grower#Grower-0201",
  "trader": "resource:org.ibm.coffee.Trader#Trader-0791",
  "PL_Invoice_no": "0067",
  "PL_IssueDate": "2017-09-19T00:00:00.000Z",
  "PL_ICO_no": "010/0150/0128",
  "PL_ICO_Lot": "Lot 7",
  "PL_FDA_NO": "15752850924",
  "PL_Bill_of_Lading_No": "961972237",
  "PL_LoadedVessel": "NorthernMagnum",
  "PL_VesselVoyage_No": "1707",
  "PL_Container_No": "redacted",
  "PL_Seal_no": "ML-Dj0144535 20 DRY 8’6",
  "PL_timestamp": "2018-06-17",
  "batchId": "hz4dzq6ilk",
  "transactionId": "2e3dfb77486cf5ad731777614741fd68c7adea8d87a103bd03e7296f46f87b82",
  "timestamp": "2018-07-19T21:55:41.859Z"
}
```

Now, if we query our batch of coffee by its id, we can see the fair trade and shipping
data associated with it. To do this, simply open your `query.js` file and change 
the following line:

```
let response = await contract.evaluateTransaction('queryAll');
```

to this (but input your own batchId :) :

```
let response = await contract.evaluateTransaction('query', 'hz4dzq6ilk');
```

Then run the query:

```
web-app$ node query.js
```

The response should be as follows: 

```

Submit hello world transaction.
"{\"PL_Bill_of_Lading_No\":\"961972237\",\"PL_Container_No\":\"redacted\",\"PL_FDA_NO\":\"15752850924\",\"PL_ICO_Lot\":\"Lot 7\",\"PL_ICO_no\":\"010/0150/0128\",\"PL_Invoice_no\":\"0067\",\"PL_IssueDate\":\"2017-09-19T00:00:00.000Z\",\"PL_LoadedVessel\":\"NorthernMagnum\",\"PL_Seal_no\":\"ML-Dj0144535 20 DRY 8’6\",\"PL_VesselVoyage_No\":\"1707\",\"PL_timestamp\":\"2018-06-17\",\"batchId\":\"hz4dzq6ilk\",\"batchState\":\"READY_FOR_DISTRIBUTION\",\"fairTradePremiumInvested\":\"$182273\",\"grower\":\"resource:org.ibm.coffee.Grower#Grower-0201\",\"investmentAmount1\":\"$30,626\",\"investmentAmount2\":\"Road Infrastructure\",\"investmentAmount3\":\"Food Security\",\"investmentTitle1\":\"School Classroom Addition\",\"investmentTitle2\":\"$43,251\",\"investmentTitle3\":\"$34,411\",\"orgDescription\":\"YCFCU is an Ethiopian coffee producing, processing, and exporting cooperative union founded in 2002. YCFCU represents 23 base level cooperatives, all located in the Gedeo Zone, within the Southern NationsNationalities and Peope (SNNPR) ethnically-based region of Ethiopia. Given that its members depend on coffee as their sole source of income, YCFCU aims to maximize financial returns to its members through its linkages with international markets.\",\"reportName\":\"Fair Trade Coffee Supply Chain Report\",\"reportYear\":\"2016\",\"roast\":\"DARK\",\"size\":\"LARGE\",\"timestamp\":\"2018-07-19T21:55:41.859Z\",\"trader\":\"resource:org.ibm.coffee.Trader#Trader-0791\",\"transactionId\":\"2e3dfb77486cf5ad731777614741fd68c7adea8d87a103bd03e7296f46f87b82\"}"
```

Note that here we are getting all data that is assocaited with our batchId. I.e.
on our ledger, we keep updating the key `hz4dzq6ilk` with more and more data. So 
that the value of our key keeps expanding with more supply chain data. At the 
end of our app, we can then query and parse the important data as we wish. 

Ok. Enough talk. More data.

Let's submit a transaction that represents the port authority receiving the shipment
after reaching its destination. 

Go to /POST/SubmitInboundWeightTallyController and paste the following JSON, except 
with your own batchId:

```
{
  "dateStripped": "2017-10-06T00:00:00.000Z",
  "marks": "010/0150/0128 Lot 7",
  "bagsExpected": "150",
  "condition": "good",
  "insectActivity": "none",
  "batchId": "hz4dzq6ilk",
  "transactionId": "cdcf476897109c6470e476eac2b90c05c223e64681311b2fabbb175f26ac8c8b",
  "timestamp": "2018-07-18T02:10:29.097Z"
}
```

Lastly, let's update our cupping data. Go to /POST/SubmitCuppingController 
and add the following json. Change your batchId. Please.

```
{
  "cupper":"Brian",
  "aroma":"9",
  "flavor":"8",
  "afterTaste":"8",
  "acidity":"8",
  "body":"9",
  "finalScore":"89",
  "batchId": "hz4dzq6ilk",
  "transactionId": "cdcf476897109c6470e476eac2b90c05c223e64681311b2fabbb175f26ac8c8b",
  "timestamp": "2018-07-18T02:10:29.097Z"
}
```

Let's query one last time, to make sure we have everything we need. Query 
for the particular batchId as before:

 ```
web-app$ node query.js
```

The response:

```

"{\"PL_Bill_of_Lading_No\":\"961972237\",\"PL_Container_No\":\"redacted\",
\"PL_FDA_NO\":\"15752850924\",\"PL_ICO_Lot\":\"Lot 7\",\"PL_ICO_no\":\"010/0150/0128\",
\"PL_Invoice_no\":\"0067\",\"PL_IssueDate\":\"2017-09-19T00:00:00.000Z\",
\"PL_LoadedVessel\":\"NorthernMagnum\",\"PL_Seal_no\":\"ML-Dj0144535 20 DRY 8’6\",
\"PL_VesselVoyage_No\":\"1707\",\"PL_timestamp\":\"2018-06-17\",\"acidity\":\"8\",
\"afterTaste\":\"8\",\"aroma\":\"9\",\"bagsExpected\":\"150\",
\"batchId\":\"hz4dzq6ilk\",\"batchState\":\"READY_FOR_DISTRIBUTION\",\"body\":\"9\",
\"condition\":\"good\",\"cupper\":\"Brian\",
\"dateStripped\":\"2017-10-06T00:00:00.000Z\",\"fairTradePremiumInvested\":\"$182273\",
\"finalScore\":\"89\",\"flavor\":\"8\",
\"grower\":\"resource:org.ibm.coffee.Grower#Grower-0201\",\"insectActivity\":\"none\",
\"investmentAmount1\":\"$30,626\",\"investmentAmount2\":\"Road Infrastructure\",
\"investmentAmount3\":\"Food Security\",\"investmentTitle1\":\"School Classroom 
Addition\",\"investmentTitle2\":\"$43,251\",\"investmentTitle3\":\"$34,411\",
\"marks\":\"010/0150/0128 Lot 7\",\"orgDescription\":\"YCFCU is an Ethiopian coffee 
producing, processing, and exporting cooperative union founded in 2002. YCFCU 
represents 23 base level cooperatives, all located in the Gedeo Zone, within the 
Southern NationsNationalities and Peope (SNNPR) ethnically-based region of Ethiopia. 
Given that its members depend on coffee as their sole source of income, YCFCU aims to 
maximize financial returns to its members through its linkages with international 
markets.\",\"reportName\":\"Fair Trade Coffee Supply Chain Report\",
\"reportYear\":\"2016\",\"roast\":\"DARK\",\"size\":\"LARGE\",\"timestamp\":\"Tue Feb 
19 2019\",\"trader\":\"resource:org.ibm.coffee.Trader#Trader-0791\",
\"transactionId\":\"cdcf476897109c6470e476eac2b90c05c223e64681311b2fabbb175f26ac8c8b\"}"
```

Ok. So now that we have all the supply chain data loaded up for our batch, it's 
time to use this batch to pour cups of coffee! Go to the */POST/pourCupController*
and enter the following json *but replace the batchId with your own*:

```
{
  "cupId": "NJB123",
  "batchId": "hz4dzq6ilk",
  "transactionId": "cdcf476897109c6470e476eac2b90c05c223e64681311b2fabbb175f26ac8c8b"
}
```

So that's pretty much it! Now when we add this data to the chain, our web-app 
can then query for this cupId (NJB123) and return the following data.

I.e. in your `query.js` now query for the cupId by changing the following line
```
let response = await contract.evaluateTransaction('queryAll');
```

to this (but input your own batchId :) :

```
let response = await contract.evaluateTransaction('query', 'NJB123');
```

Then run the query:

```
web-app$ node query.js
```

You should get the following output:

```

"{\"barista\":\"Siv\",\"batchId\":\"hz4dzq6ilk\",\"beanType\":\"Ethiopian Natural Yirgacheffe\",
\"class\":\"org.ibm.coffee.pourCup\",\"cupId\":\"NJB123\",\"drinkType\":\"Nitro\",\"lastPour\":\"Wed Feb 20 2019 22:18:46 GMT+0000 
(UTC)\",\"transactionId\":\"cdcf476897109c6470e476eac2b90c05c223e64681311b2fabbb175f26ac8c8b\"}"
```

Cool. That's it! You've now added a cup of coffee on the blockchain, and referenced it to 
our batch (hz4dzq6ilk) so that you can get all the relevant supply chain info on the 
batch of coffee that was used to pour the cup! Woo!!

All the transactions are in the chain and now we can focus on 
querying. Good job :) You are officially a blockchain monster now! 

7. [Create IBM Cloud services](#7-create-ibm-cloud-services)
8. [Build a network](#8-build-a-network)
9. [Deploy FabCar Smart Contract on the network](#9-deploy-fabcar-smart-contract-on-the-network)
10. [Connect application to the network](#10-connect-application-to-the-network)
11. [Run the application](#11-run-the-application)

## Step 7. Create IBM Cloud services

* Create the [IBM Cloud Kubernetes Service](https://cloud.ibm.com/catalog/infrastructure/containers-kubernetes).  You can find the service in the `Catalog`.  For this code pattern, we can use the `Free` cluster, and give it a name.  Note, that the IBM Cloud allows one instance of a free cluster and expires after 30 days.

<br>
<p align="center">
  <img src="docs/doc-gifs/create-ibm-kubernetes-service.gif">
</p>
<br>

* Create the [IBM Blockchain Platform 2.0](https://console.bluemix.net/catalog/services/blockchain/) service on the IBM Cloud.  You can find the service in the `Catalog`, and give a name.

<br>
<p align="center">
  <img src="docs/doc-gifs/create-ibm-blockchain-2-service.gif">
</p>
<br>

* After your kubernetes cluster is up and running, you can deploy your IBM Blockchain Platform on the cluster.  The service walks through few steps and finds your cluster on the IBM Cloud to deploy the service on.

<br>
<p align="center">
  <img src="docs/doc-gifs/deploy-blockchain-on-cluster.gif">
</p>
<br>

* Once the Blockchain Platform is deployed on the Kubernetes cluster, you can launch the console to start operating on your blockchain network.

<br>
<p align="center">
  <img src="docs/doc-gifs/launch-ibm-blockchain.gif">
</p>
<br>

## Step 8. Build a network

We will build a network as provided by the IBM Blockchain Platform [documentation](https://console.bluemix.net/docs/services/blockchain/howto/ibp-console-build-network.html#ibp-console-build-network).  This will include creating a channel with a single peer organization with its own MSP and CA (Certificate Authority), and an orderer organization with its own MSP and CA. We will create the respective identities to deploy peers and operate nodes.

### Create your organization and your entry point to your blockchain

* #### Create your peer organization CA
  - Click <b>Add Certificate Authority</b>.
  - Click <b>IBM Cloud</b> under <b>Create Certificate Authority</b> and <b>Next</b>.
  - Give it a <b>Display name</b> of `Org1 CA`.  
  - Specify an <b>Admin ID</b> of `admin` and <b>Admin Secret</b> of `adminpw`.

<br>
<p align="center">
  <img src="docs/doc-gifs/create-peer-org1-ca.gif">
</p>
<br>


* #### Use your CA to register identities
  - Select the <b>Org 1 CA</b> Certificate Authority that we created.
  - First, we will register an admin for our organization "org1". Click on the <b>Register User</b> button.  Give an <b>Enroll ID</b> of `org1admin`, and <b>Enroll Secret</b> of `org1adminpw`.  Click <b>Next</b>.  Set the <b>Type</b> for this identity as `client` and select from any of the affiliated organizations from the drop-down list. We will leave the <b>Maximum enrollments</b> and <b>Add Attributes</b> fields blank.
  - We will repeat the process to create an identity of the peer. Click on the <b>Register User</b> button.  Give an <b>Enroll ID</b> of `peer1`, and <b>Enroll Secret</b> of `peer1pw`.  Click <b>Next</b>.  Set the <b>Type</b> for this identity as `peer` and select from any of the affiliated organizations from the drop-down list. We will leave the <b>Maximum enrollments</b> and <b>Add Attributes</b> fields blank.

<br>
<p align="center">
  <img src="docs/doc-gifs/org1-ca-register-identities.gif">
</p>
<br>


* #### Create the peer organization MSP definition
  - Navigate to the <b>Organizations</b> tab in the left navigation and click <b>Create MSP definition</b>.
  - Enter the <b>MSP Display name</b> as `Org1 MSP` and an <b>MSP ID</b> of `org1msp`.
  - Under <b>Root Certificate Authority</b> details, specify the peer CA that we created `Org1 CA` as the root CA for the organization.
  - Give the <b>Enroll ID</b> and <b>Enroll secret</b> for your organization admin, `org1admin` and `org1adminpw`. Then, give the Identity name, `Org1 Admin`.
  - Click the <b>Generate</b> button to enroll this identity as the admin of your organization and export the identity to the wallet. Click <b>Export</b> to export the admin certificates to your file system. Finally click <b>Create MSP definition</b>.

<br>
<p align="center">
  <img src="docs/doc-gifs/peer-org-msp-def.gif">
</p>
<br>


* Create a peer
  - On the <b>Nodes</b> page, click <b>Add peer</b>.
  - Click <b>IBM Cloud</b> under Create a new peer and <b>Next</b>.
  - Give your peer a <b>Display name</b> of `Peer Org1`.
  - On the next screen, select `Org1 CA` as your <b>Certificate Authority</b>. Then, give the <b>Enroll ID</b> and <b>Enroll secret</b> for the peer identity that you created for your peer, `peer1`, and `peer1pw`. Then, select the <b>Administrator Certificate (from MSP)</b>, `Org1 MSP`, from the drop-down list and click <b>Next</b>.
  - Give the <b>TLS Enroll ID</b>, `admin`, and <b>TLS Enroll secret</b>, `adminpw`, the same values are the Enroll ID and Enroll secret that you gave when creating the CA.  Leave the <b>TLS CSR hostname</b> blank.
  - The last side panel will ask you to <b>Associate an identity</b> and make it the admin of your peer. Select your peer admin identity `Org1 Admin`.
  - Review the summary and click <b>Submit</b>.

<br>
<p align="center">
  <img src="docs/doc-gifs/create-peer.gif">
</p>
<br>

### Create the node that orders transactions

* #### Create your orderer organization CA
  - Click <b>Add Certificate Authority</b>.
  - Click <b>IBM Cloud</b> under <b>Create Certificate Authority</b> and <b>Next</b>.
  - Give it a unique <b>Display name</b> of `Orderer CA`.  
  - Specify an <b>Admin ID</b> of `admin` and <b>Admin Secret</b> of `adminpw`.

<br>
<p align="center">
  <img src="docs/doc-gifs/orderer-org-ca.gif">
</p>
<br>

* #### Use your CA to register orderer and orderer admin identities
  - In the <b>Nodes</b> tab, select the <b>Orderer CA</b> Certificate Authority that we created.
  - First, we will register an admin for our organization. Click on the <b>Register User</b> button.  Give an <b>Enroll ID</b> of `ordereradmin`, and <b>Enroll Secret</b> of `ordereradminpw`.  Click <b>Next</b>.  Set the <b>Type</b> for this identity as `client` and select from any of the affiliated organizations from the drop-down list. We will leave the <b>Maximum enrollments</b> and <b>Add Attributes</b> fields blank.
  - We will repeat the process to create an identity of the orderer. Click on the <b>Register User</b> button.  Give an <b>Enroll ID</b> of `orderer1`, and <b>Enroll Secret</b> of `orderer1pw`.  Click <b>Next</b>.  Set the <b>Type</b> for this identity as `peer` and select from any of the affiliated organizations from the drop-down list. We will leave the <b>Maximum enrollments</b> and <b>Add Attributes</b> fields blank.

<br>
<p align="center">
  <img src="docs/doc-gifs/orderer-ca-register-identities.gif">
</p>
<br>


* #### Create the orderer organization MSP definition
  - Navigate to the <b>Organizations</b> tab in the left navigation and click <b>Create MSP definition</b>.
  - Enter the <b>MSP Display name</b> as `Orderer MSP` and an <b>MSP ID</b> of `orderermsp`.
  - Under <b>Root Certificate Authority</b> details, specify the peer CA that we created `Orderer CA` as the root CA for the organization.
  - Give the <b>Enroll ID</b> and <b>Enroll secret</b> for your organization admin, `ordereradmin` and `ordereradminpw`. Then, give the <b>Identity name</b>, `Orderer Admin`.
  - Click the <b>Generate</b> button to enroll this identity as the admin of your organization and export the identity to the wallet. Click <b>Export</b> to export the admin certificates to your file system. Finally click <b>Create MSP definition</b>.

<br>
<p align="center">
  <img src="docs/doc-gifs/orderer-org-msp-def.gif">
</p>
<br>

* #### Create an orderer
  - On the <b>Nodes</b> page, click <b>Add orderer</b>.
  - Click <b>IBM Cloud</b> and proceed with <b>Next</b>.
  - Give your peer a <b>Display name</b> of `Orderer`.
  - On the next screen, select `Orderer CA` as your <b>Certificate Authority</b>. Then, give the <b>Enroll ID</b> and <b>Enroll secret</b> for the peer identity that you created for your orderer, `orderer1`, and `orderer1pw`. Then, select the <b>Administrator Certificate (from MSP)</b>, `Orderer MSP`, from the drop-down list and click <b>Next</b>.
  - Give the <b>TLS Enroll ID</b>, `admin`, and <b>TLS Enroll secret</b>, `adminpw`, the same values are the Enroll ID and Enroll secret that you gave when creating the CA.  Leave the <b>TLS CSR hostname</b> blank.
  - The last side panel will ask to <b>Associate an identity</b> and make it the admin of your peer. Select your peer admin identity `Orderer Admin`.
  - Review the summary and click <b>Submit</b>.

<br>
<p align="center">
  <img src="docs/doc-gifs/create-orderer.gif">
</p>
<br>

* #### Add organization as Consortium Member on the orderer to transact
  - Navigate to the <b>Nodes</b> tab, and click on the <b>Orderer</b> that we created.
  - Under <b>Consortium Members</b>, click <b>Add organization</b>.
  - From the drop-down list, select `Org1 MSP`, as this is the MSP that represents the peer's organization org1.
  - Click <b>Submit</b>.

<br>
<p align="center">
  <img src="docs/doc-gifs/add-org-orderer.gif">
</p>
<br>


### Create and join channel

* #### Create the channel
  - Navigate to the <b>Channels</b> tab in the left navigation.
  - Click <b>Create channel</b>.
  - Give the channel a name, `mychannel`.
  - Select the orderer you created, `Orderer` from the orderers drop-down list.
  - Select the MSP identifying the organization of the channel creator from the drop-down list. This should be `Org1 MSP (org1msp)`.
  - Associate available identity as `Org1 Admin`.
  - Click <b>Add</b> next to your organization. Make your organization an <b>Operator</b>.
  - Click <b>Create</b>.

<br>
<p align="center">
  <img src="docs/doc-gifs/create-channel.gif">
</p>
<br>


* #### Join your peer to the channel
  - Click <b>Join channel</b> to launch the side panels.
  - Select your `Orderer` and click <b>Next</b>.
  - Enter the name of the channel you just created. `mychannel` and click <b>Next</b>.
  - Select which peers you want to join the channel, click `Peer Org1` .
  - Click <b>Submit</b>.

<br>
<p align="center">
  <img src="docs/doc-gifs/join-channel.gif">
</p>
<br>

## Step 9. Deploy Blockchainbean2 Smart Contract on the network

* #### Install a smart contract
  - Click the <b>Smart contracts</b> tab to install the smart contract.
  - Click <b>Install smart contract</b> to upload the blockchainbean smart contract package file, which you packaged earlier using the Visual Studio code extension **look above at the end of step 3**.
  - Click on <b>Add file</b> and find your packaged smart contract.  
  - Once the contract is uploaded, click <b>Install</b>.


<br>
<p align="center">
  <img src="docs/doc-gifs/install-smart-contract.gif">
</p>
<br>

* #### Instantiate smart contract
  - On the smart contracts tab, find the smart contract from the list installed on your peers and click <b>Instantiate</b> from the overflow menu on the right side of the row.
  - On the side panel that opens, select the channel, `mychannel` to instantiate the smart contract on. Click <b>Next</b>.
  - Select the organization members to be included in the policy, `org1msp`.  Click <b>Next</b>.
  - Give <b>Function name</b> of `init` and leave <b>Arguments</b> blank.
  - Click <b>Instantiate</b>.

<br>
<p align="center">
  <img src="docs/doc-gifs/instantiate-smart-contract.gif">
</p>
<br>

## Step 10. Connect application to the network

* #### Connect with sdk through connection profile
  - Under the Instantiated Smart Contract, click on `Connect with SDK` from the overflow menu on the right side of the row.
  - Choose from the dropdown for <b>MSP for connection</b>, `org1msp`.
  - Choose from <b>Certificate Authority</b> dropdown, `Org1 CA`.
  - Download the connection profile by scrolling down and clicking <b>Download Connection Profile</b>.  This will download the connection json which we will use soon to establish connection.
  - You can click <b>Close</b> once the download completes.

<br>
<p align="center">
  <img src="docs/doc-gifs/connect-with-sdk.gif">
</p>
<br>

* #### Create an application admin
  - Go to the <b>Nodes</b> tab on the left bar, and under <b>Certifacte Authorities</b>, choose your organization CA, <b>Org1 CA</b>.
  - Click on <b>Register user</b>.
  - Give an <b>Enroll ID</b> and <b>Enroll Secret</b> to administer your application users, `app-admin` and `app-adminpw`.
  - Choose `client` as <b>Type</b> and any organization for affiliation.  We can pick `org1` to be consistent.
  - You can leave the <b>Maximum enrollments</b> blank.
  - Under <b>Attributes</b>, click on <b>Add attribute</b>.  Give attribute as `hf.Registrar.Roles` = `*`.  This will allow this identity to act as registrar and issues identities for our app.  Click <b>Add-attribute</b>.
  - Click <b>Register</b>.

<br>
<p align="center">
  <img src="docs/doc-gifs/register-app-admin.gif">
</p>
<br>


* #### Update application connection
  - Copy the connection profile you downloaded into [server folder](server)
  - Update the [config.json](server/config.json) file with:
    - The connection json file name you downloaded.
    - The <b>enroll id</b> and <b>enroll secret</b> for your app admin, which we earlier provided as `app-admin` and `app-adminpw`.
    - The orgMSP ID, which we provided as `org1msp`.
    - The caName, which can be found in your connection json file under "organization" -> "org1msp" -> certificateAuthorities". This would be like an IP address and a port.
    - The username you would like to register.
    - Update gateway discovery to `{ enabled: true, asLocalhost: false }` to connect to IBP.

> the current default setup is to connect to a local fabric instance from VS Code

```js
{
    "connection_file": "mychannel_fabcar_profile.json",
    "appAdmin": "app-admin",
    "appAdminSecret": "app-adminpw",
    "orgMSPID": "org1msp",
    "caName": "169.46.208.151:30404",
    "userName": "user1",
    "gatewayDiscovery": { "enabled": true, "asLocalhost": false }
}
```


## Step 11. Run the application

* #### Enroll admin
  - First, navigate to the `server` directory, and install the node dependencies.
    ```bash
    cd server
    npm install
    ```

  - Run the `enrollAdmin.js` script
    ```bash
    node enrollAdmin.js
    ```

  - You should see the following in the terminal:
    ```bash
    msg: Successfully enrolled admin user app-admin and imported it into the wallet
    ```

* #### Register User
  - Run the `registerUser.js` script.
    ```bash
    node registerUser.js
    ```

  - You should see the following in the terminal:
    ```bash
    Successfully registered and enrolled admin user user1 and imported it into the wallet
    ```


* #### Start the web client
  - In a new terminal, open the web-app folder from the room blockchainbean2 directory and install the dependencies.
    ```bash
    cd web-app
    npm install
    ```

  - Start the client:
    ```bash
    npm start
    ```

You can find the app running at http://localhost:3000/explorer


![packageFile](/docs/loopback.png)


You can go to the IBM Blockchain Platform v2 console to monitor your users and get information on your channel including the blocks added.

<br>
<p align="center">
  <img src="docs/doc-gifs/channel-blocks.gif">
</p>
<br>

## Conclusion

So yes! Go ahead and run the /POST transactions as you did locally, and everything will be stored on the IBM Blockchain Platform. So now, you are officialy done with this tutorial. So what did you learn?

1. You learned how to create a smart contract project with the IBM Blockchain VSCode extension.
2. You learned how to deploy your smart contract on a local Hyperledger Fabric network.
3. You learned how to update the ledger by submitting transactions to the network.
4. You learned that Hyperledger stores data as key-value pairs, so to look up data on the network, you need to pass in a key that has a value associated with it. We did that by running the query method.
5. You learned how to create a Kubernetes Cluster and IBM Blockchain service and to connect our client Loopback application to our cloud service via the connection profile we downloaded.
6, You learned how to view the ledger of a specific channel, by clicking on the channel, the ledger, and then the individual transactions. 

So at this point, you know more than me! Hopefully you feel pretty good at this point, and can dive a bit deeper into other, more complex topics, such as how to scale your network, how to optimize performance, etc. But for now, you know all of the basics to run a supply chain network on Hyperledger Fabric, both locally, and on the Cloud.

GREAT JOB! YOU DID IT! :) 

And when you create the cool new startup unicorn after learning a bunch from this tutorial, don't forget to give me, or IBM Developer some credit :) 
