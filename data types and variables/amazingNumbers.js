function amazingNum(num) {

    let numAsString = String(num)

    let result = 0
    for (let i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i])
    }
    let resultAsString = String(result)
    let includes9 = resultAsString.includes('9') ? `${num} Amazing? True` : `${num} Amazing? False`
    console.log(includes9)
}
amazingNum(1233)
amazingNum(999)