import test from '@playwright/test'
{
    test("Nested with page locator",async({page})=>{
        await page.goto("https://www.leafground.com/frame.xhtml")
       // await page.frame({url:"https://www.leafground.com/framebutton.xhtml"})?.locator("#Click").click()
        await page.frame({name:"frame2"})?.locator("#Click").click()

 
        await page.waitForTimeout(3000)
    })
}

