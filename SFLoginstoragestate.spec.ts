import test from '@playwright/test'
test("storage state for SF", async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=uk")
    await page.locator("#username").fill("meena.mathav@gmail.com")
    await page.locator("#password").fill("Playwright@2026")
    await page.locator("#Login").click()
    await page.waitForTimeout(50000)
  
    await page.context().storageState({path: "StorageState/SFM2_Login.json"})

})