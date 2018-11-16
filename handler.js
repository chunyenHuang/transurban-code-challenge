const { findPairsInArray, parseEventBody, response } = require('./utils');

module.exports.compare = (inEvent) => {
  const eventBody = parseEventBody(inEvent);

  if (!eventBody || !eventBody.data) {
    return response(400, {
      message: 'request.body.data (array) is required.'
    });
  }

  const inData = eventBody.data;
  const result = findPairsInArray(inData);

  return response(200, {
    message: `We have found ${result} pair(s) in your array of numbers.`,
    data: {
      input: inData,
      result
    }
  });
};