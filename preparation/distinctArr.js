function distinct(input){

    let arr = []
    
    for (let num of input){

        if (!arr.includes(num)){
            arr.push(num)
        }
    }
    console.log(arr.join(' '))
}
distinct([7, 8, 9, 7, 2, 3,

    4, 1, 2])