import  { expect, test } from '@playwright/test'

test("Day 12 Home assignment", async({page})=>{
    page.on('dialog', alertbox => {
        console.log("type of the alert is"+ alertbox.type())
        if(alertbox.type() === 'alert'){
             alertbox.accept()
        }else if(alertbox.type() === 'confirm'){
            alertbox.accept()
        }
        
    }
        
    )

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    const frame = page.frameLocator("#iframeResult")
    await frame.locator("//button[text() ='Try it']").click()
    //await page.click("//button[text() ='Try it']")
    const text ="You pressed OK!"
    const assert_text = await frame.locator("#demo").innerText()
    expect(assert_text).toBe(text)

})