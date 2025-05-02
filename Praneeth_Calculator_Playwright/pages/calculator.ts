import { Page, Locator } from '@playwright/test';

export class CalculatorPage {
  readonly page: Page;
  readonly btn0: Locator;
  readonly btn1: Locator;
  readonly btn2: Locator;
  readonly btn3: Locator;
  readonly btn4: Locator;
  readonly btn5: Locator;
  readonly btn6: Locator;
  readonly btn7: Locator;
  readonly btn8: Locator;
  readonly btn9: Locator;
  readonly decimal: Locator;
  readonly add: Locator;
  readonly subtract: Locator;
  readonly multiply: Locator;
  readonly divide: Locator;
  readonly equal: Locator;
  readonly ac: Locator;
  readonly ce: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    this.page = page;

    this.btn0 = page.getByRole('button', { name: '0', exact: true });
    this.btn1 = page.getByRole('button', { name: '1', exact: true });
    this.btn2 = page.getByRole('button', { name: '2', exact: true });
    this.btn3 = page.getByRole('button', { name: '3', exact: true });
    this.btn4 = page.getByRole('button', { name: '4', exact: true });
    this.btn5 = page.getByRole('button', { name: '5', exact: true });
    this.btn6 = page.getByRole('button', { name: '6', exact: true });
    this.btn7 = page.getByRole('button', { name: '7', exact: true });
    this.btn8 = page.getByRole('button', { name: '8', exact: true });
    this.btn9 = page.getByRole('button', { name: '9', exact: true });

    this.decimal = page.locator('input[value="."]');

    this.add = page.locator('input[name="add"]');
    this.subtract = page.locator('input[name="subtract"]');
    this.multiply = page.locator('input[name="multiply"]');
    this.divide = page.locator('input[name="divide"]');

    this.equal = page.locator('input[value="="]');

    this.ac = page.locator('input[value="AC"]');
    this.ce = page.locator('input[value="CE"]');

    this.result = page.locator('input.window');
  }
}
