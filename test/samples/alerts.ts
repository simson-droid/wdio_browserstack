import allureReporter from '@wdio/allure-reporter'


describe('name of the group',()=>{
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/")
        allureReporter.addStep("opening the browser")
        allureReporter.addFeature("Alerts feature")
        allureReporter.addSeverity("critical")
        browser.pause(2000);
        await $("=Alerts").click()
        await $('input[name="commit"]').click()
        await browser.getAlertText()
        await browser.acceptAlert()
        browser.pause(2000);
        await $('input[id="prompt"]').click()
        await browser.getAlertText()
        await browser.sendAlertText("mesut")
        await browser.acceptAlert()
        expect (await $('#Parademo').getText()).toContain("mesut")
        browser.pause(2000);
        await $('#confirm').click()
        await browser.getAlertText()
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession();  
        
    })
    
    
})

