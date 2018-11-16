module.exports = {
  findPairsInArray(inArrayData = []) {
    if (!Array.isArray(inArrayData) || inArrayData.length === 0) {
      return 0;
    }
    const openPairs = {};
    let pairsCount = 0;
    inArrayData.forEach((number) => {
      if (isNaN(number)) {
        return;
      }
      openPairs[number] = openPairs[number] || 0;
      openPairs[number]++;
      if (openPairs[number] === 2) {
        pairsCount++;
        openPairs[number] = 0;
      }
    });
    return pairsCount;
  },
  parseEventBody(inEvent) {
    let parsedBody = {};
    try {
      parsedBody = JSON.parse(inEvent.body);
    } catch (e) {
      //
    }
    return parsedBody;
  },
  response(inStatusCode, inData) {
    let body = JSON.stringify({});
    if(inData){
      try{
        body = JSON.stringify(inData);
      } catch(e){
        //
      }  
    }
    const responseData = {
      statusCode: inStatusCode || 500,
      body,
      headers: {
        'Content-type': 'application/json'
      }
    };
    return Promise.resolve(responseData);
  }
};
