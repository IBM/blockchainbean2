/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class MyContract extends Contract {

  /**
   * 
   * addMember 
   * 
   * When a member to the blockchain - can be either grower, shipper, trader, or retailer.
   * @param id - the unique id to identify the member
   * @param organization - what organization is the member part of
   * @param address - address of org
   * @param memberType - can be grower, shipper, trader and retailer
   */

  async addMember(ctx, id, organization, address, memberType) {
    console.info('addMember invoked');

    //create object to hold details of our new member
    let newMember = {};

    newMember.id = id;
    newMember.organization = organization;
    newMember.address = address;
    newMember.memberType = memberType;



    await ctx.stub.putState(id, Buffer.from(JSON.stringify(newMember)));
    console.info('updated ledger with key: ' + id + 'and value: ');
    console.info(JSON.stringify(newMember));

    return newMember;

  }

  async init(ctx) {
    console.info('init invoked');

  }

  /**
   * 
   * pourCup
   * 
   * Transaction used when pouring a cup of coffee at the event. Will
   * record who poured it, what time, what type of coffee, etc.
   * Users then can use this cupId later to get more details from the
   * blockchain about their beverage
   * @param cupId - the Id of the cup of coffee to be poured
   */
  async pourCup(ctx, cupId, batchId, transactionId) {
    console.info('pourCup called');
    if (cupId.length <= 0) {
      throw new Error('Please enter the cupId');
    }

    let cupCoffee = {};
    cupCoffee.cupId = cupId;

    //there needs to be a batch associated with the cup that is poured
    let coffeeAsBytes = await ctx.stub.getState(batchId);
    if (!coffeeAsBytes || coffeeAsBytes.length === 0) {
      return new Error(`${batchId} batch does not exist`);
    }

    cupCoffee.batchId = batchId;
    cupCoffee.transactionId = transactionId;

    console.info('pourCup called after transId');

    //get the first character of the cupId - this represents drink type
    let drinkType = cupId.charAt(0);
    if (drinkType.toLowerCase() === 'c') {
      cupCoffee.drinkType = 'Iced';
    } else if (drinkType.toLowerCase() === 'e') {
      cupCoffee.drinkType = 'Hot';
    } else {
      cupCoffee.drinkType = 'Nitro';
    }
    console.info('pourCup called after drinktype');

    //get the 2nd character of cupId - this represents the barista which poured the cup
    let barista = cupId.charAt(1);
    if (barista.toLowerCase === 'j') {
      cupCoffee.barista = 'Josh';
    } else {
      cupCoffee.barista = 'Siv';
    }

    //get the 3nd character of cupId - this represents the co-op
    let coop = cupId.charAt(2);
    if (coop.toLowerCase() === 'b') {
      cupCoffee.beanType = 'Ethiopian Natural Yirgacheffe';
    }
    console.info('pourCup called after after coop');

    let dateStr = new Date();
    dateStr = dateStr.toString();
    cupCoffee.lastPour = dateStr;
    console.info('pourCup called after after date');

    cupCoffee.class = 'org.ibm.coffee.pourCup';

    console.log('cupId')
    console.log(cupId)

    await ctx.stub.putState(cupId, Buffer.from(JSON.stringify(cupCoffee)));
    console.info('updated ledger with key: ' + cupId + 'and value: ');
    console.info(JSON.stringify(cupCoffee));
    return cupCoffee;
  }

  /**
   * 
   * addCoffee 
   * 
   * When a grower adds a batch of coffee to the blockchain.
   * This creates the coffee asset on the blockchain.
   * @param size - size of coffee (small, medium, large)
   * @param roast - roast of coffee (light, medium, dark)
   * @param batchState - state of coffee (READY_FOR_DISTRIBUTION, 
   * REGULATION_TEST_PASSED, IMPORTED, READY_FOR_SALE)
   * @param growerId - the Id of the grower who will be associated with this batch
   */

  // let response = await args.contract.submitTransaction(args.function,
  //   args.size, args.roast, args.batchState, args.grower, args.batchId,
  //    args.transactionId, args.timestamp 
  // );
  async addCoffee(ctx, size, roast, batchState, grower, transactionId, timestamp) {
    console.info('addCoffee invoked');

    //TODO: 
    //do check to make sure the grower exists in the blockchain

    let batchCoffee = {};
    // generate random batchId from Math.random function
    let batchId = Math.random().toString(36).substring(3);
    batchCoffee.size = size;
    batchCoffee.roast = roast;
    batchCoffee.batchState = batchState;
    batchCoffee.grower = grower;
    batchCoffee.batchId = batchId;
    batchCoffee.transactionId = transactionId;
    batchCoffee.timestamp = timestamp;


    await ctx.stub.putState(batchId, Buffer.from(JSON.stringify(batchCoffee)));
    console.info('updated ledger with key: ' + batchId + 'and value: ');
    console.info(JSON.stringify(batchCoffee));
    return batchCoffee;
  }

  /**
   * 
   * submitFairTradeData
   * 
   * A transaction which adds fair trade data about our coffee batch.
   * @param batchId - the batch of coffee which is produced according to fair-trade standards
   * @param reportName - name of report 
   * @param orgDescription - description of fair trade coffee producer  
   * @param reportYear - year the report was written
   * @param fairTradePremiumInvested - totat amount invested in fair trade
   * 
   * // 3 different investments, each with a different amount
   * @param investmentTitle1
   * @param investmentAmount1
   * @param investmentTitle2 
   * @param investmentAmount2 
   * @param investmentTitle3
   * @param investmentAmount3
   */

  // args.function,
  // args.reportName, args.organizationDescription, args.reportYear, args.fairtradePremiumInvested,
  // args.invementTitle1, args.investmentAmount2 ,args.investmentTitle2, args.investmentAmount3,
  // args.investmentTitle3, args.batchId, args.transactionId, args.timestamp  st
  async submitFairTradeData(ctx, reportName, orgDescription, reportYear,
    fairTradePremiumInvested, investmentTitle1, investmentAmount1, investmentTitle2,
    investmentAmount2, investmentTitle3, investmentAmount3, batchId, transactionId, timestamp) {

    //get batch identified bby batchId from the ledger
    let coffeeAsBytes = await ctx.stub.getState(batchId);
    if (!coffeeAsBytes || coffeeAsBytes.length === 0) {
      return new Error(`${batchId} batch does not exist`);
    }
    let batchCoffee = JSON.parse(coffeeAsBytes);


    //update our batch of coffee with the shipping details and a owner (the trader)
    // let batchCoffee = {};

    batchCoffee.reportName = reportName;
    batchCoffee.orgDescription = orgDescription;
    batchCoffee.reportYear = reportYear;
    batchCoffee.fairTradePremiumInvested = fairTradePremiumInvested;
    batchCoffee.investmentTitle1 = investmentTitle1;
    batchCoffee.investmentAmount1 = investmentAmount1;
    batchCoffee.investmentTitle2 = investmentTitle2;
    batchCoffee.investmentAmount2 = investmentAmount2;
    batchCoffee.investmentTitle3 = investmentTitle3;
    batchCoffee.investmentAmount3 = investmentAmount3;
    batchCoffee.batchId = batchId;
    batchCoffee.transactionId = transactionId;
    batchCoffee.timestamp = timestamp;
    console.log('batchId: ')
    console.info(batchId)

    //update the ledger with the new shipping + owner details
    await ctx.stub.putState(batchId, Buffer.from(JSON.stringify(batchCoffee)));
    console.info('updated ledger with key: ' + batchId + 'and value: ');
    console.info(JSON.stringify(batchCoffee));
    return batchCoffee;
  }

  /**
   * 
   * submitPackingList
   * 
   * A transaction which adds shipping details from the packing list to the blockchain.
   * @param batchId - the batch we are shipping
   * @param growerId - Id of the grower which handed over beans to trader
   * @param shipperId - Id of the shipper which handed over beans to trader
   * @param issueDate - the date the package was shipped 
   * @param ICO_Num - ICO_number from the packing list
   * @param ICO_Lot - Lot where the shipment will start the journey from
   * @param FDA_Num - FDA number associated with this batch of beans 
   * @param invoiceNum - packing list invoice number
   * @param billofLadingNum - receipt of freight services
   * @param vesselName - name of the vessel
   * @param vesselVoyageNum number associated with vessel
   * @param containerNum - container which holds our shipment
   * @param sealNum - seal associated with our packing list
   * @param timestamp - when the transaction was submitted to the blockchain
   */

  async submitPackingList(ctx, grower, trader, PL_Invoice_no, PL_IssueDate, PL_ICO_no,
    PL_ICO_Lot, PL_FDA_NO, PL_Bill_of_Lading_No, PL_LoadedVessel, PL_VesselVoyage_No, PL_Container_No,
    PL_Seal_no, PL_timestamp, batchId, transactionId, timestamp) {
    console.info('submit packing list invoked');

    //TODO: do if (batch exists) check

    //get batch identified bby batchId from the ledger
    // let coffeeAsBytes = await ctx.stub.getState(batchId);
    // let batchCoffee = JSON.parse(coffeeAsBytes);
    let coffeeAsBytes = await ctx.stub.getState(batchId);
    if (!coffeeAsBytes || coffeeAsBytes.length === 0) {
      return new Error(`${batchId} batch does not exist`);
    }
    let batchCoffee = JSON.parse(coffeeAsBytes);
    //update our batch of coffee with the shipping details
    batchCoffee.grower = grower;
    batchCoffee.trader = trader;
    batchCoffee.PL_Invoice_no = PL_Invoice_no;
    batchCoffee.PL_IssueDate = PL_IssueDate;
    batchCoffee.PL_ICO_no = PL_ICO_no;
    batchCoffee.PL_ICO_Lot = PL_ICO_Lot;
    batchCoffee.PL_FDA_NO = PL_FDA_NO;
    batchCoffee.PL_Bill_of_Lading_No = PL_Bill_of_Lading_No;
    batchCoffee.PL_LoadedVessel = PL_LoadedVessel;
    batchCoffee.PL_VesselVoyage_No = PL_VesselVoyage_No;
    batchCoffee.PL_Container_No = PL_Container_No;
    batchCoffee.PL_Seal_no = PL_Seal_no;
    batchCoffee.PL_timestamp = PL_timestamp;
    batchCoffee.batchId = batchId;
    batchCoffee.transactionId = transactionId;
    batchCoffee.timestamp = timestamp;
    //update the ledger with the new shipping + owner details
    await ctx.stub.putState(batchId, Buffer.from(JSON.stringify(batchCoffee)));
    console.info('updated ledger with key: ' + batchId + 'and value: ');
    console.info(JSON.stringify(batchCoffee));
    return batchCoffee;

  }

  /**
   * submitWeightTally
   * 
   * A transaction which details from the packing list to the blockchain.
   * @param shipperId - Id of the shipper which is now in charge of shipping beans\
   * @param traderId - Id of the trader which is now in charge of shipping beans
   * @param batchId - the batch that is being checked
   * @param dateStripped - date when shipment is inspected
   * @param marks - if the shipment is has visible signs of damage  
   * @param bagsExpected - number of bags expected in the shipment
   * @param condition - bad, fair, good, excellent
   * @param insectActivity - yes,no
   *  
   */

  async submitWeightTally(ctx, dateStripped, marks, bagsExpected, condition,
    insectActivity, batchId, transactionId, timestamp) {
    console.info('submit weight tally invoked');
    //TODO: do if (batch exists) check

    //get batch identified bby batchId from the ledger
    // let coffeeAsBytes = await ctx.stub.getState(batchId);
    // let batchCoffee = JSON.parse(coffeeAsBytes);

    let coffeeAsBytes = await ctx.stub.getState(batchId);
    if (!coffeeAsBytes || coffeeAsBytes.length === 0) {
      return new Error(`${batchId} batch does not exist`);
    }
    let batchCoffee = JSON.parse(coffeeAsBytes);
    //update our batch of coffee with the shipping details and a owner (the trader)
    batchCoffee.dateStripped = dateStripped;
    batchCoffee.marks = marks;
    batchCoffee.bagsExpected = bagsExpected;
    batchCoffee.condition = condition;
    batchCoffee.insectActivity = insectActivity;
    batchCoffee.batchId = batchId;
    batchCoffee.transactionId = transactionId;
    batchCoffee.timestamp = timestamp;

    //update the ledger with the new shipping + owner details
    await ctx.stub.putState(batchId, Buffer.from(JSON.stringify(batchCoffee)));
    console.info('updated ledger with key: ' + batchId + 'and value: ');
    console.info(JSON.stringify(batchCoffee));
    return batchCoffee;

  }

  /**
   * submitCupping
   * 
   * A transaction which adds details of the cupping process to the blockchain.
   * @param batchId - the batch that is being checked
   * @param traderId - Id of the trader which is now in charge of selling beans to retailer
   * @param retailerId - Id of the retailer which is now in charge of cupping
   * @param dateCupped - date when cupping details were submitted
   * @param cupper - the barista in charge of critiquing the batch of coffee
   * @param aroma - the overall smell of the beans  
   * @param flavor - taste and smell of the beans
   * @param afterTaste - the taste of the coffee after drinking it. 
   * @param acidity - how acidic is the coffee? 
   * @param body - how does the coffee feel? Describes how the coffee feels. Light, heavy, smooth. 
   * @param finalScore - The average of all the scores (body + acidity + aftertaste, etc.) 
   * 
   */

  // let response = await args.contract.submitTransaction(args.function,
  //   args.cupper, args.aroma, args.flavor, args.afterTaste,
  //   args.acidity, args.body, args.finalScore, args.batchId,
  //   args.transactionId, args.timestamp );

  async submitCupping(ctx, cupper, aroma, flavor, afterTaste, acidity, body,
    finalScore, batchId, transactionId, timestamp) {

    console.info('submitCupping invoked');

    //TODO: do if (batch exists) check

    //get batch identified bby batchId from the ledger
    // let coffeeAsBytes = await ctx.stub.getState(batchId);
    // let batchCoffee = JSON.parse(coffeeAsBytes);

    // console.info('batchCoffee: ');
    // console.info(batchCoffee);
    let coffeeAsBytes = await ctx.stub.getState(batchId);
    if (!coffeeAsBytes || coffeeAsBytes.length === 0) {
      return new Error(`${batchId} batch does not exist`);
    }
    let batchCoffee = JSON.parse(coffeeAsBytes);
    //update our batch of coffee with the shipping details and a owner (the trader)
    // let batchCoffee = {};
    batchCoffee.cupper = cupper;
    batchCoffee.aroma = aroma;
    batchCoffee.flavor = flavor;
    batchCoffee.afterTaste = afterTaste;
    batchCoffee.acidity = acidity;
    batchCoffee.body = body;
    batchCoffee.finalScore = finalScore;
    batchCoffee.batchId = batchId

    //update the ledger with the new shipping + owner details
    await ctx.stub.putState(batchId, Buffer.from(JSON.stringify(batchCoffee)));
    console.info('updated ledger with key: ' + batchId + 'and value: ');
    console.info(JSON.stringify(batchCoffee));
    return batchCoffee;

  }

  async query(ctx, key) {
    console.info('query by key ' + key);
    let returnAsBytes = await ctx.stub.getState(key);
    console.info(returnAsBytes)
    if (!returnAsBytes || returnAsBytes.length === 0) {
      return new Error(`${key} does not exist`);
    }
    let result = JSON.parse(returnAsBytes);
    console.info('result of getState: ');
    console.info(result);
    return JSON.stringify(result);
  }

  async queryAll(ctx) {

    let queryString = {
      "selector": {}
    }

    let queryResults = await this.queryWithQueryString(ctx, JSON.stringify(queryString));
    return queryResults;

  }

  async queryWithQueryString(ctx, queryString) {

    console.log("query String");
    console.log(JSON.stringify(queryString));

    let resultsIterator = await ctx.stub.getQueryResult(queryString);

    let allResults = [];

    while (true) {
      let res = await resultsIterator.next();

      if (res.value && res.value.value.toString()) {
        let jsonRes = {};

        console.log(res.value.value.toString('utf8'));

        jsonRes.Key = res.value.key;

        try {
          jsonRes.Record = JSON.parse(res.value.value.toString('utf8'));
        } catch (err) {
          console.log(err);
          jsonRes.Record = res.value.value.toString('utf8');
        }

        allResults.push(jsonRes);
      }
      if (res.done) {
        console.log('end of data');
        await resultsIterator.close();
        console.info(allResults);
        console.log(JSON.stringify(allResults));
        return JSON.stringify(allResults);
      }
    }
  }

}

module.exports = MyContract;
