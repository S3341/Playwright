import { test, expect } from '@playwright/test';
import { chromium} from '@playwright/test'
import { constants } from 'buffer';

test('Creat an account with the Required Details', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('MNptest@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Hanshithk@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('banner').getByText('Welcome, Kumar Kota Kota!').click();
  await page.getByRole('menuitem', { name: 'What\'s New' }).click();
  await page.getByRole('link', { name: 'Hoodies & Sweatshirts' }).first().click();
  await page.locator('li').filter({ hasText: 'Circe Hooded Ice Fleece As' }).getByLabel('S', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Circe Hooded Ice Fleece As' }).locator('button').click();
  await page.getByLabel('S', { exact: true }).click();
  await page.getByLabel('Gray').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: ' My Cart 1 1\nitems' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();
  await page.getByLabel('Company').click();
  await page.getByLabel('Company').fill('Test');
  await page.getByLabel('Street Address: Line 1').click();
  await page.getByLabel('Street Address: Line 1').fill('Test');
  await page.getByLabel('City').click();
  await page.getByLabel('City').fill('Test');
  await page.locator('#EBHMWEO').selectOption('57');
  await page.getByLabel('Zip/Postal Code').click();
  await page.getByLabel('Zip/Postal Code').fill('76682');
  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('879879879');
  await page.getByLabel('Table Rate').check();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await expect(page.getByText('Your order number is:').isVisible);
});
