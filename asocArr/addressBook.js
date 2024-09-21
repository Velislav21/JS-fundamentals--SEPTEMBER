function adrsBook(input){

    let obj = {};

    for (let person of input){

        let [name, address] = person.split(':');
        obj[name] = address;
    }
    let sorted = Object.entries(obj)
    sorted.sort((a, b) => a[0].localeCompare(b[0]))
    
    for (let personInfo of sorted){
        console.log(`${personInfo[0]} -> ${personInfo[1]}`)
    }

}
adrsBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])