import locators from "./locators";


describe('name of the group',()=>{
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/")
        browser.pause(2000);
        await $("=SignUp Form").click()
        console.log(await browser.getWindowRect())
        let position=await browser.getWindowRect()
        console.log(position.x+" "+position.y)
        browser.setWindowRect(2000,200,800,600)   
        browser.pause(6000);    
        browser.setWindowSize(1000,700) 
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession();  
        
    })
    
    
})

