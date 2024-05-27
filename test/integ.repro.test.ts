import 'source-map-support/register';

import * as test from '@aws-cdk/integ-tests-alpha';
import * as cdk from 'aws-cdk-lib';

const app = new cdk.App({
  analyticsReporting: false,
  stackTraces: true, 
});

const testStack = new cdk.Stack(app, 'repro-api-stack');
const integ = new test.IntegTest(app, 'repro-api-test', {
  testCases: [testStack],
});
const apiCall = integ.assertions.httpApiCall(
  'https://cat-fact.herokuapp.com/facts',
);
const value = apiCall.getAttString('body.0.user');

integ.assertions
  .httpApiCall(`https://cat-fact.herokuapp.com/users/${value}`)
  .expect(
    test.ExpectedResult.objectLike({
      status: 404,
    }),
  );
