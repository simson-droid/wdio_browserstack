import locators from "./locators";
describe('Text vs value',()=>{
    it('should behave.',async()=>{
        browser.url("https://qavbox.github.io/demo/signup/")
        browser.pause(3000)
        await $('#username').setValue("mesutozil")
        console.log("get value"+ (await $('#username')).getValue())
        expect(await $('#username').getValue()).toEqual("mesutozil")
        await $('#username').clearValue()
        expect (await $('#username').getValue()).toEqual('')
    })
    it('should behave.',async()=>{
        browser.url("https://qavbox.github.io/demo/signup/")
        browser.pause(2000)
        let exps= await $$("input[name='experience']")
        expect(exps.length).toEqual(8)
        exps.filter(async el=>{
            if( await el.getValue()==="three"){
                await el.click()
                expect(await el.isSelected()).toBe(true)

            }
        })
        await browser.pause(2000)
        await $("input[name='experience'][value='four']").click()
        expect(await $("input[name='experience'][value='four']").isSelected()).toBe(true)
        await browser.pause(2000)
    })
    it('should behave.',async()=>{
        let exps= await $$("input[name='language']")
        expect(exps.length).toEqual(7)
        exps.filter(async el=>{
            if( (await el.getValue()).includes("testing")){
                await el.click()
                expect(await el.isSelected()).toBe(true)

            }
        })
        await browser.pause(2000)
    })
})