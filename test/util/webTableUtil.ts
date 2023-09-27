export default class Webtable{
    public Table

    constructor(tableLocator){
        this.Table= $(`${tableLocator}`)
    }
    async getAllRows(){
        return await this.Table.$$("tbody tr")
    }
    async getAllRowsCount(){
        return (await this.Table.$$("tbody tr")).length
    }

    async getColsCount(row){
        return (await this.Table.$$(`tbody tr:nth-child(${row}) td`)).length
    }

    async getAllData(){
        return await this.Table.$$("tbody tr td")
    }
    async getElementText(row, column){
        let el=await this.Table.$(`tbody tr:nth-child(${row}) td:nth-child(${column})`)
        return await el.getText()
    }
    async ClickCell(row, column){
        let el=await this.Table.$(`tbody tr:nth-child(${row}) td:nth-child(${column})`)
        return await el.click()
    }
    async delRowText(text:string){
        let rows=await this.getAllRows()
        await rows.forEach(async row=>{
            let cells=await row.$$('td')
            await cells.forEach(async cell=>{
                if(await cell.getText().includes(text)){
                    await cells[0].click()
                    await cells[4].click()
                }
            })

        })

      
    }
}