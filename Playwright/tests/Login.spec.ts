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
    await expect(page.getByRole('banner').getByText('Welcome, Kumar Kota Kota!').isVisible());
});
