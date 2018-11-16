const axios = require('axios');
axios({
    "method": "POST",
    "url": "https://2q6ekv70ff.execute-api.us-east-1.amazonaws.com/dev/arrayComparison",
    "headers": {
      "x-api-key": "M4YVlnwyKkhc60b2wI0s1h9yn7kD4eZ1NdiLgRze"
    },
    "data": {
      "data": [10, 20, 20, 10, 10, 30, 50, 10, 20]
    }
  })
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err.response.data);
  });
