import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/calculator';

test.describe('Negative and edge case operations on calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Leading zeros: 0005 + 3 = 8', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn0.click();
    await calc.btn0.click();
    await calc.btn0.click();
    await calc.btn5.click();
    await calc.add.click();
    await calc.btn3.click();
    await calc.equal.click();

    expect(await calc.result.inputValue()).toBe('8');
  });

  test('Incomplete operation: 4.5 + = should return 4.5', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn4.click();
    await calc.decimal.click();
    await calc.btn5.click();
    await calc.add.click();
    await calc.equal.click();

    expect(await calc.result.inputValue()).toBe('4.5');
  });

  test('Multiple decimals in one number: 3.1.4 should become 3.14', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn3.click();
    await calc.decimal.click();
    await calc.btn1.click();
    await calc.decimal.click(); // This should be ignored
    await calc.btn4.click();

    expect(await calc.result.inputValue()).toBe('3.14');
  });

  test('Long number input: 999999999999999999999 + 1 = 1e+21', async ({ page }) => {
    const calc = new CalculatorPage(page);

    // 21 digits of 9
    for (let i = 0; i < 21; i++) {
      await calc.btn9.click();
    }
    await calc.add.click();
    await calc.btn1.click();
    await calc.equal.click();

    expect(await calc.result.inputValue()).toBe('1e+21');
  });

  test('Zero as operand: 0 + 0 = 0', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn0.click();
    await calc.add.click();
    await calc.btn0.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('0');
  });

  test('Zero as operand: 5 x 0 = 0', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn5.click();
    await calc.multiply.click();
    await calc.btn0.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('0');
  });

  test('Zero as operand: 0 ÷ 5 = 0', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn0.click();
    await calc.divide.click();
    await calc.btn5.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('0');
  });

  test('Divide by zero: 8 ÷ 0 = Not a Number', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn8.click();
    await calc.divide.click();
    await calc.btn0.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('Not a Number');
  });

  test('Decimal start: .5 + .5 = 1', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.decimal.click();
    await calc.btn5.click();
    await calc.add.click();
    await calc.decimal.click();
    await calc.btn5.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('1');
  });
});
