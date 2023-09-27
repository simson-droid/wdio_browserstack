import fetch from 'node-fetch'

describe('find broken links',()=>{
    it('should behave',async()=>{
        let baseUrl="https://qavbox.github.io"
        browser.url(`${baseUrl}/demo/links`)
        browser.pause(2000);
        await $$('a').forEach(async(link)=>{
            await link.getAttribute('href').then(async(href)=>{
                let Url:string|URL=href
                if(!Url.startsWith('http:')){
                    Url=new URL(Url,baseUrl)
                }
                console.log("print url"+Url)
                await fetch(href).then(async(resp)=>{
                    expect (resp.status).toMatch(/^[2-3].*/)
                })
            })
        })
        await browser.execute(() => {
            window.close()
        })  
        await browser.deleteSession(); 
    })
})