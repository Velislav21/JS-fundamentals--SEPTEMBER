function employees(input){

    let workers = {};

    for (let i = 0; i < input.length; i++){
        workers.name = input[i];
        workers.num = input[i].length;
        console.log(`Name: ${workers.name} -- Personal Number: ${workers.num}`)
    }
}
employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])