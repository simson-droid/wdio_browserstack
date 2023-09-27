import locators from "./locators";

describe('name of the group',()=>{
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/")
        browser.pause(2000);
        await $("=SignUp Form").click()
        let textItems=await $$("input[type='text']")
        let items=textItems.forEach(async el=>{
            console.log(el.getAttribute("id"))
        })
        let options= await $$("#tools option")
        console.log(options[1].getText())
    })
})