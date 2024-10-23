# CDK TypeScript API Project

This project is a serverless API built using AWS CDK with TypeScript. It demonstrates how to create a simple API Gateway endpoint that triggers a Lambda function to process POST requests.

## Project Description

This serverless application uses AWS CDK to define and deploy the following resources:

- API Gateway: Handles incoming HTTP requests
- Lambda Function: Processes the POST request and returns a response

## Prerequisites

- Node.js (v14.x or later)
- AWS CLI configured with appropriate credentials
- AWS CDK CLI installed (`npm install -g aws-cdk`)
- Docker or an equivalent tool (e.g., Orbstack)
- AWS SAM CLI (`brew install aws-sam-cli`)

## Setup and Running Locally

1. Clone the repository
2. Install dependencies:
   ```
   npm run install-all
   ```
3. Run the project locally:
   ```
   npm run local
   ```

## API Usage

After running locally, you can use the following POST endpoint:

- **Endpoint:** `POST /process-message`
- Body format has to be changed to text/plain
- **Example Payload:**
  ```
  MSG|^~\&|SenderSystem|Location|ReceiverSystem|Location|20230502112233
  ||DATA^TYPE|123456|P|2.5
  EVT|TYPE|20230502112233
  PRS|1|9876543210^^^Location^ID||Smith^John^A|||M|19800101|
  DET|1|I|^^MainDepartment^101^Room 1|Common Cold
  ```
- **Expected Response:**
  ```json
  {
    "fullName": {
      "lastName": "Smith",
      "firstName": "John",
      "middleName": "A"
    },
    "dateOfBirth": "1980-01-01",
    "primaryCondition": "Common Cold"
  }
  ```

## Deployment

To deploy the application to your AWS account, use:

```
npx cdk deploy
```

## Useful Commands

- `npm run build` - Compile TypeScript to JavaScript
- `npm run watch` - Watch for changes and compile
- `npm run test` - Perform Jest unit tests
- `npx cdk diff` - Compare deployed stack with current state
- `npx cdk synth` - Emit the synthesized CloudFormation template

## Troubleshooting

- If you encounter `sh: sam: command not found`, run `brew install aws-sam-cli`

## Future Improvements

- Add nodemon for automatic reloading during development
- Implement more comprehensive tests
- Add Swagger documentation for API
