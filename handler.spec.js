const { assert } = require('chai');
const { compare } = require('./handler');

describe('handler test', () => {
  it('compare', () => {
    const sets = [{
      input: formatInput([10, 20, 20, 10, 10, 30, 50, 10, 20]),
      expect: {
        statusCode: 200,
        data: {
          result: 3
        }
      }
    }, {
      input: {},
      expect: {
        statusCode: 400,
        data: {
          result: 3
        }
      }
    }, , {
      input: null,
      expect: {
        statusCode: 400,
        data: {
          result: 3
        }
      }
    }];
    const promises = [];
    sets.forEach(item => {
      const testPromise = compare(item.input).then(res => {
        assert.equal(res.statusCode, item.expect.statusCode);
        const body = JSON.parse(res.body);
        assert.exists(body.message);
        if (body.data) {
          assert.equal(body.data.result, item.expect.data.result);
        }
      });
      promises.push(testPromise);
    });
    return Promise.all(promises);
  });
});

function formatInput(inData) {
  return {
    body: JSON.stringify({
      data: inData
    })
  };
}
