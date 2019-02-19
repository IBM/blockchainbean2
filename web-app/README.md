# Commercial Paper Loopback 

This is an application that acts as a front end for interacting with the commercial paper smart contract
from the Hyperledger Fabric 1.4 documentation. 

## Overview
This application shows how to easily scaffold and get started creating a front-end application to interact with 
your deployed smart contract. This application is an extension to the Hyperledger paper contract developer tutorial,
and adds on an extra layer (the UI) with the goal of enabling users that are not developers to interact with a 
smart contract. 

The application has three main components - the models, the views, and the controllers. Since loopback (the lb4 tool) 
creates the UI for you, based on your models and controllers, I will focus on just those two components (the models 
and the controllers).

#### Models
To view the models of this application, go to `commercialPaperLoopback/src/models`. Let's first take a look at 
the `models/issue.ts` file. When you open the file, you will see the following code:

```
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

```
What you see here are the definitions of the properties of the Issue object. We can make 
the properties required - as you can see in the first two properties, or optional. Ok - 
time to move on to the controllers.

#### Controllers
The controllers will take what we write into our request body (i.e. the UI of the loopback app)
and pass that data to the `papernet` smart contract we have deployed on our local Hyperledger
Fabric newtork. To get an idea of the controllers, go to your `commercialPaperLoopback/src/controllers`
directory and open the `issue.controller.ts` file. In there, you will see the following code: 

```

import { BlockChainModule } from '../blockchainClient';

let blockchainClient = new BlockChainModule.BlockchainClient();

export class IssueController {
  constructor() {}

  @post('/issue', {
    responses: {
      '200': {
        description: 'Todo model instance',
        content: {'application/json': {schema: {'x-ts-type': Issue}}},
      },
    },
  })
  async createIssue(@requestBody() requestBody: Issue): Promise<Issue> {
    console.log('Buy, requestBody: ')
    console.log(requestBody)


    let networkObj = await blockchainClient.connectToNetwork();
    if (!networkObj) {
      let errString = 'Error connecting to network';
      let issue = new Issue({issuer: errString, paperNumber: errString, issueDateTime: errString, maturityDateTime: errString });
      return issue;
    }
    console.log('newtork obj: ')
    console.log(networkObj)

    let dataForIssue = {
      function: 'issue',
      issuer: requestBody.issuer,
      paperNumber: requestBody.paperNumber,
      issueDateTime: requestBody.issueDateTime,
      maturityDateTime: requestBody.maturityDateTime,
      faceValue: requestBody.faceValue,
      contract: networkObj.contract
    };

    var resultAsBuffer = await blockchainClient.issue(dataForIssue);

    console.log('result from blockchainClient.submitTransaction in controller: ')
    let result = JSON.parse(Buffer.from(JSON.parse(resultAsBuffer)).toString())
    let issue = new Issue({issuer: result.issuer, paperNumber: result.paperNumber, issueDateTime: result.issueDateTime,
      maturityDateTime: result.maturityDateTime 
    });
    return issue;       
  }

}

```
At the top of the file, we define our response schema - the data structure that will be 
returned to the UI after submitting a transaction to the smart contract. Notice that here 
we are returning an object of type `Issue` - which we have defined in our `issue.model.ts`
file. 

Next, we define the CRUD operations of our API. For simplicity - we have only defined 
the `/post/issue` method. Note that all CRUD methods can be implemented in a similar 
manner to `/post/issue`. 

In our `async createIssue(@requestBody() requestBody: Issue): Promise<Issue> {` method, 
we first connect to our Hyperledger Fabric network by telling our application where 
our peers, orderers, and certificate authority are running - this is all done by calling the 
`blockchainClient.connectToNetwork()` function, which we have imported at the top of the 
file. To find the 


 Next, we look for a deployed 
contract such as the paper net contract. Finally, we call the appropriate method in the 
deployed contract, and send that response back to the user. 
#### Connecting the UI to the Smart Contract - the Blockchain Client




### Steps

1.  Clone this project into your local directory 
2.  run `npm install` in the newly cloned directory
3.  run `npm start` in the newly cloned directory
3.  Go to http://127.0.0.1:3000/explorer/ and interact with the contract. 

### Architecture




