import locators from "./locators";

describe('name of the group',()=>{
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/")
        browser.pause(2000);
        /*
        await $("=WebTable").click()
        
        browser.pause(2000);
        await locators.getTableData(1,2).getText()
        //await(await $('table[id=\'table01\']'). $('tbody tr:nth-child(1) td:nth-child(2)')).getText()
        */
        
        
        await $("=SignUp Form").click()
        browser.pause(2000);
        await(await $('h3')).getText()
        await(await $('label*=Full')).getAttribute('id')
        await $$('[role=link]').length
        await(await locators.getTypeText(1)).setValue('barcelona')
        browser.pause(4000);
    })
})