function pBook (input){

    let obj = {}


    for (let line of input){
        let [key, value] = line.split(' ')
        obj[key] = value
    }
    for (let key in obj){
        console.log(`${key} -> ${obj[key]}`)
    }
}
pBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])