import {test} from '@playwright/test';
test("Salesforce login using Xpath", async({page})=>{
await page.goto("https://login.salesforce.com/")
await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("//input[@id='password']").fill("TestLeaf@2025")
await page.locator("//input[@id='Login']").click()
await page.locator("//div[@class='slds-icon-waffle']").click()
await page.locator("//button[@aria-label='View All Applications']").click()
await page.locator("//p[contains(text(),'Manage your sales')]").click()
await page.locator("(//span[@class='slds-truncate'])[4]").click()
await page.locator("//div[@title='New']").click()
//await page.selectOption("#combobox-button-636",{value: "Mr."})
await page.getByRole('combobox', { name: 'Salutation' }).click();
await page.getByRole('option', { name: 'Mr.' }).click();
await page.locator("//input[@name='lastName']").fill("Rajendran")
await page.locator("//input[@name='Company']").fill("Testleaf")
await page.getByRole('button',{name: 'Save', exact: true}).click()
//await page.locator("//button[@name='SaveEdit']").click()

})


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.getByRole('combobox', { name: 'Salutation' }).click();
//   await page.getByRole('option', { name: 'Mr.' }).click();
//   await page.getByRole('textbox', { name: 'Last Name' }).click();
//   await page.getByRole('textbox', { name: 'Last Name' }).fill('Rajendran');
//   await page.getByRole('textbox', { name: 'Company' }).click();
//   await page.getByRole('textbox', { name: 'Company' }).fill('Testleaf');
//   await page.getByRole('button', { name: 'Save', exact: true }).click();
//   await page.locator('lightning-formatted-name').click();
// });