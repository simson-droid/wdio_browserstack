import data from '../util/appdata'

describe("test base urls",()=>{
    it("test diff urls",async()=>{
        browser.url('/')
        console.log(new data().getCreds())
    })
})