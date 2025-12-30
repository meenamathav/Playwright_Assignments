import {test} from '@playwright/test';
test("Salesforce login using Xpath", async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("(//form[@id='login']//input)[1]").fill("Demosalesmanager")
await page.locator("(//form[@id='login']//input)[2]").fill("crmsfa")
await page.getByRole('button', { name: 'Login' }).click()
await page.getByRole('link', { name: 'CRM/SFA' }).click()
await page.getByRole('link', { name: 'Leads' }).click()
await page.getByRole('link', {name: 'Create Lead'}).click()
await page.locator("//input[@id='createLeadForm_companyName']").fill("Playwright")
await page.locator("//input[@id='createLeadForm_firstName']").fill("Meena")
await page.locator("//input[@id='createLeadForm_lastName']").fill("Raj")
await page.getByRole('button',{name: 'Create Lead'}).click()
await page.getByRole('link',{name: 'Edit'}).click()
await page.locator("//input[@id ='updateLeadForm_companyName']").fill("Testleaf")
await page.getByRole('button',{name: 'Update'}).click()

//input[@id='createLeadForm_companyName']

})