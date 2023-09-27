import locators from "./locators";


describe('name of the group',()=>{
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/shadowDOM")
        browser.pause(2000);
        await(await $('my-open-component').shadow$("input")).setValue("mesutozil")
        let elem= await browser.executeScript("return document.querySelector('my-open-component').shadowRoot.querySelector('input')",[])
        await $(elem).setValue("override")
        browser.pause(2000); 
        
    })

    it('should behave',async()=>{
        browser.url("https://shop.polymer-project.org/")
        browser.pause(2000);
        await (await $('[page=home]').shadow$(".iron-selected").shadow$("h2")).getText()
        
       
        browser.pause(2000);
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession();  
        
    })
    
    
})

