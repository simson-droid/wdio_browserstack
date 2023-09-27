import Webtable from "../util/webTableUtil";


describe('name of the group',()=>{
    it('should behave',async()=>{
        browser.url("https://qavbox.github.io/demo/webtable")
        browser.pause(2000);
        //await $$('#table01 tbody tr').length
        //console.log(await $$('#table01 tbody tr:nth-child(1) td').length)
        let table=new Webtable('#table01')
        expect (await table.getAllRowsCount()).toBe(3)
        await table.delRowText("Functional")
        browser.pause(2000);
        await table.ClickCell(2,2)
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession();  
        
    })
    
    
})

