#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { HealthMessageParserStack } from '../lib/health-message-parser-stack';

export const lambdaFunctionName = 'TS-cdk-health-message-parser';
const app = new cdk.App();
new HealthMessageParserStack(app, 'HealthMessageParserStack', {
  functionName: lambdaFunctionName,
});
