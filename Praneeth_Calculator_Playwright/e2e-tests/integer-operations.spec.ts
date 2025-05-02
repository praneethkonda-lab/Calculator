import { test, expect } from '@playwright/test';
import { CalculatorPage } from '../pages/calculator';

test.describe('Integer operations on calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Addition: 7 + 5 = 12', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn7.click();
    await calc.add.click();
    await calc.btn5.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('12');
  });

  test('Subtraction: 9 - 3 = 6', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn9.click();
    await calc.subtract.click();
    await calc.btn3.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('6');
  });

  test('Multiplication: 4 x 6 = 24', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn4.click();
    await calc.multiply.click();
    await calc.btn6.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('24');
  });

  test('Division: 8 ÷ 2 = 4', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn8.click();
    await calc.divide.click();
    await calc.btn2.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('4');
  });

  test('AC clears all', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn9.click();
    await calc.add.click();
    await calc.btn4.click();

    // AC can only be seen after clicking on CE
    await calc.ce.click();
    await calc.ac.click();
    expect(await calc.result.inputValue()).toBe('');

    //making sure the history is also deleted
    await calc.btn6.click();
    expect(await calc.result.inputValue()).toBe('6');
  });

  test('CE clears last entry', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.btn7.click();
    await calc.subtract.click();
    await calc.btn4.click();

    // CE deletes only the last entry
    await calc.ce.click();
    expect(await calc.result.inputValue()).toBe('');

    //making sure history is present and calculates value accordingly
    await calc.btn3.click();
    await calc.equal.click();
    expect(await calc.result.inputValue()).toBe('4');
  });
});
