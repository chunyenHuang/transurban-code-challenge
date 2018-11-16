# transurban-code-challenge

## Instruction

1. Create a public repository in GitHub (https://github.com/)
2. Create AWS Free Account (https://aws.amazon.com/free/).  If you have an existing account that is fine to use as well.
3. Using the Serverless Framework create an API that can be deployed to your AWS account (https://serverless.com/)
    - Code should be written in Node.js
    - API will consist of 1 interface Pairs
    - Pairs will take one input that is an array of numbers
    - It will return the number of matching pairs for the array
        - Example Input:	 [10, 20, 20, 10, 10, 30, 50, 10, 20]
        - Example output:	 3
    - Add security to the API by not allowing calls to be made without providing an assigned API key
4. Commit the project to the GitHub repository you created in step 1.  Include all source code, unit tests, serverless files.  Do not include any generated files.  For instance, the node_modules/ directory created from a npm install command
5. Please email back a url to the repository and a url and API key to your API running in AWS.

## GetStarted

```bash
npm i && npm run deploy
```

## Demo

```bash
npm run demo
```

Or you can make api call with the following parameters.

```json
{
    "method": "POST",
    "url": "https://2q6ekv70ff.execute-api.us-east-1.amazonaws.com/dev/arrayComparison",
    "headers": {
        "x-api-key": "M4YVlnwyKkhc60b2wI0s1h9yn7kD4eZ1NdiLgRze"
    },
    "body": {
        "data": [10, 20, 20, 10, 10, 30, 50, 10, 20]
    }
}
```

## Test

```bash
npm test
```