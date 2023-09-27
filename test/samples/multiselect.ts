import locators from "./locators";
export class Select{
    async getSelectedOptions(options){
        let selectedText=[]
        for(let option of options){
            if(await option.isSelected()){
                selectedText.push(await option.getText())
            }
        }
        return selectedText
    }

}

describe('name of the group',()=>{
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/")
        browser.pause(2000);
        await $("=SignUp Form").click()
        let select_option= await $("select[id='tools']")
        let options= await select_option.$$("option")
        expect(options.length).toBe(10)

        await select_option.selectByIndex(1) // male
        browser.pause(2000);
        //expect(await $("option[value='male']").isSelected()).toBe(true)
        expect(await new Select().getSelectedOptions(options)).toContain("Cypress")
        await select_option.selectByAttribute("value","postman")
        browser.pause(2000);
        await select_option.selectByVisibleText("JMeter")
        browser.pause(2000);
        
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession();  
        
    })
    
    
})

