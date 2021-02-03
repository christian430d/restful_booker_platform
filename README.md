# Restful Booker Platform Automated Testing

Restful Booker Platform Automation project for regression testing using [Testcafe](https://devexpress.github.io/testcafe/documentation/getting-started/).
This project verifies and validates Admin Login, Multiple Room Creation and deletion FLows.

## Getting Started

These are the steps to start using this project or implement more test cases to the suite.

## Prerequisites

To be able to use this project, below is the software stack required:
- node JS version 10+
- Browsers: Chrome, Firefox, IE

## Installing
Install the modules required by the project using below command
```
npm install -g testcafe
npm install
```
## Project structure and Configuration
- Configure the Environment credentials in [config.json](config.json) file.
- Configure [run-config.json](run-config.json) for custom test suite, or update existing test suite with test cases per requirement.
- Configure [test-runner.js](test-runner.js) for timeouts, reporter etc choices.

## Running the tests

To execute the test cases, below is the command. This command takes browser name, environment name, test-suite name, concurrency of execution, release id as arguments
```
node test-runner.js --browser=chrome --environment=PROD --suite=test --concurrency=1 

or npm run test
```
- browser - values['chrome', 'chrome:headless', 'firefox', 'firefox:headless', 'ie', 'all']
- enviroment - values['LOCAL','PROD']
- suite - values['smoke','all', ... 'custom']
- concurrency - values[1 to 5]

