import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/calculator';

test.describe('Decimal operations on calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Addition: 7.5 + 2.5 = 10', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn7.click();
    await calc.decimal.click();
    await calc.btn5.click();
    await calc.add.click();
    await calc.btn2.click();
    await calc.decimal.click();
    await calc.btn5.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('10');
  });

  test('Subtraction: 9.6 - 3.1 = 6.5', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn9.click();
    await calc.decimal.click();
    await calc.btn6.click();
    await calc.subtract.click();
    await calc.btn3.click();
    await calc.decimal.click();
    await calc.btn1.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('6.5');
  });

  test('Multiplication: 2.5 x 4 = 10', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn2.click();
    await calc.decimal.click();
    await calc.btn5.click();
    await calc.multiply.click();
    await calc.btn4.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('10');
  });

  test('Division: 6.6 ÷ 2 = 3.3', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn6.click();
    await calc.decimal.click();
    await calc.btn6.click();
    await calc.divide.click();
    await calc.btn2.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('3.3');
  });

  test('AC clears all after decimal input', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn5.click();
    await calc.decimal.click();
    await calc.btn5.click();
    await calc.ce.click();
    await calc.ac.click();
    expect(await calc.result.inputValue()).toBe('');

    await calc.btn1.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('1');
  });

  test('CE clears last decimal entry', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn8.click();
    await calc.decimal.click();
    await calc.btn9.click();
    await calc.subtract.click();
    await calc.btn1.click()
    await calc.ce.click();
    expect(await calc.result.inputValue()).toBe('');
    await calc.btn2.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('6.9');
  });
});
