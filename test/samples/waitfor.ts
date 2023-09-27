import locators from "./locators";


describe('name of the group',()=>{
    /*
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/delay/")
        browser.pause(2000);
        await $('input[name="commit1"]').click()
        await $("#delay").waitForExist({timeout:6000})
        expect (await $("#delay").getText()).toContain("appeared after 5 sec")
        
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession();  
        
        
    })
    
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/delay/")
        browser.pause(2000);
        await $('#loaderStart').click()
        await (await $("#loader b")).waitForDisplayed({timeout:6000,reverse:true})
        expect (await $("#loaderdelay").getText()).toContain("appeared after 5 sec loading")
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession();  
        
    })
    
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/delay/")
        browser.pause(2000);
        await $('input[name="commit1"]').click()
        let elem= await $('#delay')
        await elem.waitUntil(async function() {
            return(await this.getText())!=""},
            {
             timeout:6000,
             timeoutMsg:"text didn't appear for delay element"   
            })
            
        expect (await elem.getText()).toContain("after 5 sec")
        
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession(); 
    })    
    */
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/")
        browser.pause(2000);
        await $('=SignUp Form').click()
        await browser.waitUntil(async function() {
            return(await $$("input[type='text']")).length>3},
            //for alerts -- async()=>{await browser.getAlertText()!==null}
            {
             timeout:6000,
             timeoutMsg:"text didn't appear "   
            })
            
        expect (await $$("input[type='text']").length).toBeGreaterThan(3)
        
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession(); 
    })   
    
})



