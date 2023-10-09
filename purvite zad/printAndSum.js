function printSum(start, end){

    let sum = 0
    let buff = ""
    for (let i = start; i <= end; i++){
        sum += i
        buff +=" " + i
    }
    console.log(buff)
    console.log(`Sum: ${sum}`)
}
printSum(5, 10)