import {test} from '@playwright/test';
test("Salesforce login using Xpath", async({page})=>{
await page.goto("https://login.salesforce.com/")
await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("//input[@id='password']").fill("TestLeaf@2025")
await page.locator("//input[@id='Login']").click()
await page.locator("//div[@class='slds-icon-waffle']").click()
await page.locator("//button[@aria-label='View All Applications']").click()
//await page.getByRole('button', { name: 'View All Applications' }).click
await page.getByRole('link', { name: 'Individuals' }).click();
await page.getByRole('button', { name: 'New' }).click();
await page.getByRole('combobox', { name: 'Salutation' }).click();
await page.getByRole('option', { name: 'Mrs.' }).click()
await page.getByRole('textbox', { name: 'Last Name' }).click();
await page.getByRole('textbox', { name: 'Last Name' }).fill('Raj');
await page.getByRole('button', { name: 'Save', exact: true }).click();


})


