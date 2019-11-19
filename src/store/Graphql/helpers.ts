import {includes} from 'lodash'

declare type binary = 1 | 0;
function getBitHash(options: any [],checked: any[] ): binary[]{
    return options.map(option => includes(checked,option)?1:0)
}
function getDecimal(arr: binary[]): number {
    var val = 0
    var counter = 1
    arr.forEach(value => {
        val += value*Math.pow(2,arr.length-counter)
    })
    return val
}
export const tableToDecimal=(table: any[],confirmed: any[]): number => {
    return getDecimal(getBitHash(table,confirmed))
}

export const findOther = (table: any[], confirm: any[]): string => {
    let other = confirm.find((entry) => !includes(table,entry))
    return other?other:""
}
export const jsArraytoSQL = (jsArray: Array<any>) => {
    let sqlArray = '{';
    jsArray.forEach(element=>sqlArray+=element+',')
    sqlArray = sqlArray.substring(0, sqlArray.length-1) + '}'
    return sqlArray
}
export const jsToSQL = (obj:any) => {
    for(let key in obj) {
        if (Array.isArray(obj[key]))
            obj[key] = jsArraytoSQL(obj[key])
    }
}