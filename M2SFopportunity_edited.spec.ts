import test, { expect } from '@playwright/test'
test.use({ storageState: "StorageState/SFM2_Login.json" })
test("Marathon2 SF create opportunity", async ({ page }) => {
    await page.goto("https://orgfarm-0a06cfddc9-dev-ed.develop.lightning.force.com/lightning/n/standard-LightningSchedulerSetupAssistant")
    await page.waitForTimeout(7000)
    await page.click(".slds-icon-waffle")

    //sale app selector
    await page.locator(".slds-input").fill("Sales")
    await page.locator(".slds-grid.slds-grid--vertical-align-center.al-text-wrapper").nth(2).click()

    //lead selector
    await page.locator("//a[@href='/lightning/o/Lead/home']").click()

    await page.locator("//div[@title='New']").click()

    await page.getByRole('combobox', { name: 'Salutation' }).click();
    await page.getByRole('option', { name: 'Mr.' }).click();
    const Name = 'MarathonLead_Jan27'
    await page.locator("//input[@name='lastName']").fill(Name)
    await page.locator("//input[@name='Company']").fill("Testleaf")
    await page.getByRole('button', { name: 'Save', exact: true }).click()
    const msg = await page.locator("//span[@class='toastMessage slds-text-heading--small force0ActionsText']").innerText()
    expect(msg).toContain(Name)
    console.log("created successfully")

    await page.getByRole('button', { name: 'Show more actions' }).click()

    await page.locator("//span[text()='Convert']").click()
    const OppChange = "Playwright"

    await page.locator("(//button[@class='slds-button slds-button_neutral slds-button_stretch transparentButton'])[3]").click()
    await page.getByRole('textbox', { name: 'Opportunity Name *' }).fill(OppChange);


    await page.getByRole('button', { name: 'Convert' }).click()
    await expect(page.getByRole('heading', { name: "Your lead has been converted" })).toBeVisible()
    await page.getByRole('button', { name: "Go to Leads" }).click()
    await page.getByPlaceholder('Search this list...').fill(Name)
    await expect(page.getByRole('heading', { name: 'Nothing to see here' })).toBeVisible()
    await page.locator("//span[text()='Opportunities']").click()

    await page.locator(`//span[text()= '${OppChange}']`).click()
    console.log("completed")




})
