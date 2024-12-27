function distinctArr(input) {

    let myArr = [];
    
    for (let num of input){
        if (!myArr.includes(num)){
            myArr.push(num)
        }
    }
    console.log(myArr.join(' '))
}
distinctArr([1, 2, 3, 4])

console.log("-------------------------")

distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2])