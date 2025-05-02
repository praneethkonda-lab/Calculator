# Calculator App Testing – Playwright Test Suite

## Overview

This test suite automates the validation of an online calculator web app (https://www.theonlinecalculator.com/) using [Playwright](https://playwright.dev/). It covers both integer and decimal operations, negative and edge case scenarios ensuring correctness of basic arithmetic logic and proper UI behavior.

## Test Coverage

Tests are split into three categories and tried to mimic the Page Object Model (POM) by keeping all the locators in calculator.ts file

#### Integer Operations ############

- Addition: 7 + 5 = 12
- Subtraction: 9 - 3 = 6
- Multiplication: 4 × 6 = 24
- Division: 8 ÷ 2 = 4
- AC clears all entries
- CE clears last entry

#### Decimal Operations ############

- Addition: 7.5 + 2.5 = 10
- Subtraction: 9.5 - 4.5 = 5
- Multiplication: 3.2 × 2 = 6.4
- Division: 7.5 ÷ 2.5 = 3
- AC clears decimal expressions
- CE removes last entry in decimal expressions

#### Edge & Negative Cases ############

- Division by zero → Should not crash, show error or handle gracefully
- Multiple operator presses → Should only register the latest
- Empty input then equals → Should return default value or error
- Leading zeroes (e.g., 007) → Should normalize correctly
- Sequential operations without equals → Intermediate results or proper chaining
- Long input
- Zero as operand operations
- starting with decimal

## Project Structure
Praneeth_Calculator_Playwright

├── e2e-tests/ 

      ├── integer-operations.spec.ts 
  
      │── decimal-operations.spec.ts 
  
      │── negative-cases.spec.ts 
  
├── pages/ 

      │── calculator.ts 
  
├── package.json 

├── playwright.config.ts

└── README.md


## How to run the tests

git clone Calculator
cd Calculator
cd Praneeth_Calculator_Playwright

#### Pre-requisite: 

NodeJS is installed

#### Initialize the project
npm init -y

#### Install Playwright
npm install -D @playwright/test

#### Install browser binaries
npx playwright install

#### Run tests
npx playwright test

#### View HTML report
npx playwright show-report

