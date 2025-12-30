import {test} from '@playwright/test';
test("Facebook login using Xpath", async({page})=>{
await page.goto("https://en-gb.facebook.com/")
await page.locator("//a[text()='Create new account']").click()
await page.waitForTimeout(2000)
await page.locator("//input[@name ='firstname']").fill("Playwright")
await page.locator("//input[@aria-label='Surname']").fill("Automation")
await page.selectOption("#day",{value:"18"})
await page.selectOption("#month",{label:"Jun"})
await page.selectOption("#year",{value:"1996"})
await page.locator("//label[text()='Female']").click()
await page.getByRole('textbox',{name:'Mobile number or email address'}).fill("playwright.automation@gmail.com")
//await page.locator("//input[@name='reg_email__']").fill("playwright.automation@gmail.com")
await page.locator("//input[@id='password_step_input']").fill("testleaf")
//await page.getByRole('textbox',{name:'New password'}).fill("testleaf")
await page.waitForTimeout(2000)

})