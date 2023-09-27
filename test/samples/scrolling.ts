import locators from "./locators";

describe('Scrolling into view',()=>{
    xit('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/signup")
        await (await $('=Tutorials!')).scrollIntoView({behavior:"smooth"})
        browser.pause(4000);
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession(); 
    })
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/webtable")
        await $('#table02').scrollIntoView()
        browser.pause(4000);
        while(!(await $('td=Paul Byrd')).isDisplayedInViewport){
            await browser.execute(()=>{
                let elem= document.querySelector('#table02')
                elem.scrollTop=elem.scrollTop+200
            })
        }
        browser.pause(4000);
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession(); 
    })
})