const { assert } = require('chai');
const { findPairsInArray, parseEventBody, response } = require('./utils');

describe('utils test', () => {
  it('findPairsInArray', (done) => {
    const sets = [{
      input: [10, 20, 20, 10, 10, 30, 50, 10, 20],
      expectedValue: 3
    }, {
      input: [],
      expectedValue: 0
    }, {
      input: null,
      expectedValue: 0
    }, {
      input: ['a', 'a', 'b', 'b'],
      expectedValue: 0
    }, {
      input: [0, 0, 0, 0, 0],
      expectedValue: 2
    }, {
      input: [-1, 0, null, undefined, 'asjdkl', -1, 0],
      expectedValue: 2
    }];
    sets.forEach(item => {
      assert.equal(findPairsInArray(item.input), item.expectedValue);
    })
    done();
  });
  it('parseEventBody', (done) => {
    const sets = [{
      input: {},
      expected: {}
    }, {
      input: { body: JSON.stringify({ data: [0, 0] }) },
      expected: { data: [0, 0] }
    }, {
      input: null,
      expected: {}
    }];
    sets.forEach(item => {
      assert.equal(JSON.stringify(parseEventBody(item.input)), JSON.stringify(item.expected));
    })
    done();
  });
  it('response', () => {
    const sets = [{
      input: {
        statusCode: null,
        data: null,
      },
      expected: {
        statusCode: 500,
        body: {},
      }
    }, {
      input: {
        statusCode: 200,
        data: '',
      },
      expected: {
        statusCode: 200,
        body: {},
      }
    }];
    const promises = [];
    sets.forEach(item => {
      const testPromise = response(item.input.statusCode, item.input.data).then(res => {
        assert.equal(res.statusCode, item.expected.statusCode);
        assert.equal(res.body, JSON.stringify(item.expected.body));
      });
      promises.push(testPromise);
    })
    return Promise.all(promises);
  });
});
