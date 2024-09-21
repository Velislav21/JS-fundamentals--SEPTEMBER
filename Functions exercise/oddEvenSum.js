function oddEvenSum(num){

    let numAsString = num.toString()
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numAsString.length; i++){
        if (Number(numAsString[i]) % 2 == 0){
            evenSum += Number(numAsString[i])
        } else {
            oddSum += Number(numAsString[i])
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}
oddEvenSum(1000435)
oddEvenSum(3495892137259234)