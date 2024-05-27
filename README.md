# Reproduction repository

Reproduces: https://github.com/aws/aws-cdk/issues/30327

```
reproapitestDefaultTestDeployAssertA03A3219:  start: Building c249cc3dd4b39375ecae79fa91e95d0fd518c25091db4ea6c4aff5022d00f7e8:current_account-current_region
reproapitestDefaultTestDeployAssertA03A3219:  success: Built c249cc3dd4b39375ecae79fa91e95d0fd518c25091db4ea6c4aff5022d00f7e8:current_account-current_region
reproapitestDefaultTestDeployAssertA03A3219:  start: Publishing c249cc3dd4b39375ecae79fa91e95d0fd518c25091db4ea6c4aff5022d00f7e8:current_account-current_region
reproapitestDefaultTestDeployAssertA03A3219:  success: Published c249cc3dd4b39375ecae79fa91e95d0fd518c25091db4ea6c4aff5022d00f7e8:current_account-current_region
repro-api-test/DefaultTest/DeployAssert: deploying... [1/1]
reproapitestDefaultTestDeployAssertA03A3219: creating CloudFormation changeset...
reproapitestDefaultTestDeployAssertA03A3219 | 0/5 | 11:32:31 AM | REVIEW_IN_PROGRESS   | AWS::CloudFormation::Stack                             | reproapitestDefaultTestDeployAssertA03A3219 User Initiated
reproapitestDefaultTestDeployAssertA03A3219 | 0/5 | 11:32:36 AM | CREATE_IN_PROGRESS   | AWS::CloudFormation::Stack                             | reproapitestDefaultTestDeployAssertA03A3219 User Initiated
reproapitestDefaultTestDeployAssertA03A3219 | 0/5 | 11:32:39 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role                                         | repro-api-test/DefaultTest/DeployAssert/SingletonFunction1488541a7b23466481b69b4408076b81/Role (SingletonFunction1488541a7b23466481b69b4408076b81Role37ABCE73)
reproapitestDefaultTestDeployAssertA03A3219 | 0/5 | 11:32:40 AM | CREATE_IN_PROGRESS   | AWS::IAM::Role                                         | repro-api-test/DefaultTest/DeployAssert/SingletonFunction1488541a7b23466481b69b4408076b81/Role (SingletonFunction1488541a7b23466481b69b4408076b81Role37ABCE73) Resource creation Initiated
reproapitestDefaultTestDeployAssertA03A3219 | 1/5 | 11:32:56 AM | CREATE_COMPLETE      | AWS::IAM::Role                                         | repro-api-test/DefaultTest/DeployAssert/SingletonFunction1488541a7b23466481b69b4408076b81/Role (SingletonFunction1488541a7b23466481b69b4408076b81Role37ABCE73)
reproapitestDefaultTestDeployAssertA03A3219 | 1/5 | 11:32:57 AM | CREATE_IN_PROGRESS   | AWS::Lambda::Function                                  | repro-api-test/DefaultTest/DeployAssert/SingletonFunction1488541a7b23466481b69b4408076b81/Handler (SingletonFunction1488541a7b23466481b69b4408076b81HandlerCD40AE9F)
reproapitestDefaultTestDeployAssertA03A3219 | 1/5 | 11:32:59 AM | CREATE_IN_PROGRESS   | AWS::Lambda::Function                                  | repro-api-test/DefaultTest/DeployAssert/SingletonFunction1488541a7b23466481b69b4408076b81/Handler (SingletonFunction1488541a7b23466481b69b4408076b81HandlerCD40AE9F) Resource creation Initiated
reproapitestDefaultTestDeployAssertA03A3219 | 2/5 | 11:33:05 AM | CREATE_COMPLETE      | AWS::Lambda::Function                                  | repro-api-test/DefaultTest/DeployAssert/SingletonFunction1488541a7b23466481b69b4408076b81/Handler (SingletonFunction1488541a7b23466481b69b4408076b81HandlerCD40AE9F)
reproapitestDefaultTestDeployAssertA03A3219 | 2/5 | 11:33:05 AM | CREATE_IN_PROGRESS   | Custom::DeployAssert@HttpCallcat-factherokuappcomfacts | repro-api-test/DefaultTest/DeployAssert/HttpApiCallcat-fact.herokuapp.com--facts77c13b1c90b3620a2c6e32ccb72dd4b9/Default/Default (HttpApiCallcatfactherokuappcomfacts77c13b1c90b3620a2c6e32ccb72dd4b9)
reproapitestDefaultTestDeployAssertA03A3219 | 2/5 | 11:33:08 AM | CREATE_IN_PROGRESS   | Custom::DeployAssert@HttpCallcat-factherokuappcomfacts | repro-api-test/DefaultTest/DeployAssert/HttpApiCallcat-fact.herokuapp.com--facts77c13b1c90b3620a2c6e32ccb72dd4b9/Default/Default (HttpApiCallcatfactherokuappcomfacts77c13b1c90b3620a2c6e32ccb72dd4b9) Resource creation Initiated
reproapitestDefaultTestDeployAssertA03A3219 | 3/5 | 11:33:08 AM | CREATE_COMPLETE      | Custom::DeployAssert@HttpCallcat-factherokuappcomfacts | repro-api-test/DefaultTest/DeployAssert/HttpApiCallcat-fact.herokuapp.com--facts77c13b1c90b3620a2c6e32ccb72dd4b9/Default/Default (HttpApiCallcatfactherokuappcomfacts77c13b1c90b3620a2c6e32ccb72dd4b9)
reproapitestDefaultTestDeployAssertA03A3219 | 3/5 | 11:33:10 AM | CREATE_FAILED        | Custom::DeployAssert@HttpCall                          | repro-api-test/DefaultTest/DeployAssert/HttpApiCall420eb7584d44d218b546a254d24187f3/Default/Default (HttpApiCall420eb7584d44d218b546a254d24187f3) CustomResource attribute error: Vendor response doesn't contain apiCallResponse.body.0.user attribute in object arn:aws:cloudformation:eu-central-1:000000000000:stack/reproapitestDefaultTestDeployAssertA03A3219/0a27cae0-1c0c-11ef-8a16-06c7f0b45427|HttpApiCallcatfactherokuappcomfacts77c13b1c90b3620a2c6e32ccb72dd4b9|c2e7fce9-1d78-485d-a256-2626a2736295
reproapitestDefaultTestDeployAssertA03A3219 | 3/5 | 11:33:10 AM | CREATE_FAILED        | AWS::CloudFormation::Stack                             | reproapitestDefaultTestDeployAssertA03A3219 The following resource(s) failed to create: [HttpApiCall420eb7584d44d218b546a254d24187f3].

Failed resources:
reproapitestDefaultTestDeployAssertA03A3219 | 11:33:10 AM | CREATE_FAILED        | Custom::DeployAssert@HttpCall                          | repro-api-test/DefaultTest/DeployAssert/HttpApiCall420eb7584d44d218b546a254d24187f3/Default/Default (HttpApiCall420eb7584d44d218b546a254d24187f3) CustomResource attribute error: Vendor response doesn't contain apiCallResponse.body.0.user attribute in object arn:aws:cloudformation:eu-central-1:000000000000:stack/reproapitestDefaultTestDeployAssertA03A3219/0a27cae0-1c0c-11ef-8a16-06c7f0b45427|HttpApiCallcatfactherokuappcomfacts77c13b1c90b3620a2c6e32ccb72dd4b9|c2e7fce9-1d78-485d-a256-2626a2736295

 ❌  repro-api-test/DefaultTest/DeployAssert failed: Error: The stack named reproapitestDefaultTestDeployAssertA03A3219 failed to deploy: CREATE_FAILED (The following resource(s) failed to create: [HttpApiCall420eb7584d44d218b546a254d24187f3]. )
    at FullCloudFormationDeployment.monitorDeployment (/Users/tomasztrebski/dev-ay/integ-repro/node_modules/aws-cdk/lib/index.js:442:10568)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Object.deployStack2 [as deployStack] (/Users/tomasztrebski/dev-ay/integ-repro/node_modules/aws-cdk/lib/index.js:445:199515)
    at async /Users/tomasztrebski/dev-ay/integ-repro/node_modules/aws-cdk/lib/index.js:445:181237

 ❌ Deployment failed: Error: The stack named reproapitestDefaultTestDeployAssertA03A3219 failed to deploy: CREATE_FAILED (The following resource(s) failed to create: [HttpApiCall420eb7584d44d218b546a254d24187f3]. )
    at FullCloudFormationDeployment.monitorDeployment (/Users/tomasztrebski/dev-ay/integ-repro/node_modules/aws-cdk/lib/index.js:442:10568)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Object.deployStack2 [as deployStack] (/Users/tomasztrebski/dev-ay/integ-repro/node_modules/aws-cdk/lib/index.js:445:199515)
    at async /Users/tomasztrebski/dev-ay/integ-repro/node_modules/aws-cdk/lib/index.js:445:181237

The stack named reproapitestDefaultTestDeployAssertA03A3219 failed to deploy: CREATE_FAILED (The following resource(s) failed to create: [HttpApiCall420eb7584d44d218b546a254d24187f3]. )
```
