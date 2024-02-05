import { test, expect } from '@playwright/test';
import { chromium} from '@playwright/test'
import { constants } from 'buffer';

test('Creat an account with the Required Details', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Create an Account' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Spandana');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('D');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('Test@gmail.com');
  await page.getByRole('textbox', { name: 'Password*', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('Vihaan@123');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Vihhan@123');
  await page.getByRole('button', { name: 'Create an Account' }).click();
  await expect(page.getByRole('heading', { name: 'My Account' }).locator('span').isVisible);
});


