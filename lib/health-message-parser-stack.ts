import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { StackProps } from 'aws-cdk-lib';
import lambdas from '../src/app';

interface LambdaApiStackProps extends StackProps {
  functionName: string;
}

export class HealthMessageParserStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: LambdaApiStackProps) {
    super(scope, id, props);

    lambdas(this, id, props);
  }
}
