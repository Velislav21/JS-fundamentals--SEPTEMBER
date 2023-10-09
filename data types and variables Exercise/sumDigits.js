function sum(num) {

    let result = 0
    let numAsString = String(num)

    for (let i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i])
    }
    console.log(result)
}
sum(245678)