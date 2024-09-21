function list(input){

    let sortedInput = input.sort()
    for (let i = 1; i <= input.length; i++){
        console.log(`${i}.${sortedInput[i - 1]}`)
    }
}
list(['Potatoes', 'Tomatoes', 'Onions',

'Apples'])
//list(['Watermelon', 'Banana', 'Apples'])