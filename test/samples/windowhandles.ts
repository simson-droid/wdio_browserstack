import Webtable from "../util/webTableUtil";


describe('name of the group',()=>{
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/links")
        let parentWindow= await browser.getWindowHandle()
        /*
        browser.newWindow("https://qavalidation.com")
        browser.pause(2000);
        await browser.switchToWindow(parentWindow)
        await browser.switchToWindow("Browser")
        await browser.getTitle()
        
        
        await browser.switchWindow("qavalidation")
        */
       await $('[name="multiple"]').click()
       let windows= await browser.getWindowHandles()
       for (let window of windows){ // if(parent_window!=window)
        await browser.switchToWindow(window)
        if ((await browser.getTitle()).includes("qavalidation")){
            console.log("switched to the expected window")
        }
        
       }
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession();  
        
    })
    
    
})

