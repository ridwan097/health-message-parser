import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { HealthMessageParserStack } from '../lib/health-message-parser-stack';
import { lambdaFunctionName } from '../bin/health-message-parser';

describe('HealthMessageParserStack', () => {
  const app = new cdk.App();
  const stack = new HealthMessageParserStack(app, 'MyTestStack', {
    functionName: lambdaFunctionName,
  });
  const template = Template.fromStack(stack);

  test('Lambda Function Created', () => {
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.default',
      Runtime: 'nodejs20.x',
    });
  });

  test('API Gateway Created', () => {
    template.resourceCountIs('AWS::ApiGateway::RestApi', 1);
  });
});
