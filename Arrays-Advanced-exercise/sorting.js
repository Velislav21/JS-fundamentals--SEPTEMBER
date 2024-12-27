function sorting(input){

    let newArr = []

    let ascendingOrder = input.sort((a, b) => a - b)

    for (let i = 0; i < input.length + 3; i++){
        let maxNum = ascendingOrder.pop()
        let minNum = ascendingOrder.shift()
        newArr.push(maxNum, minNum)
    }
    console.log(newArr.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
console.log("----------------------")
sorting([34, 2, 32, 45, 690, 6, 32,7, 19, 47])