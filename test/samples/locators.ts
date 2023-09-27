class locators{
    getTableData(rowI,colI){
        return $(`table[id=\'table01\'] tbody tr:nth-child(${rowI}) td:nth-child(${colI})`)
    }
    getTypeText(selection){
        return $(`//input[@type=\'text\'][${selection}]`)
    }
}
export default new locators()