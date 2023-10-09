function sumEvenNums(arr){

    let evenSum = 0;

    for (let i = 0; i < arr.length; i++){
        
        if (Number(arr[i] % 2 == 0)){
            evenSum += Number(arr[i])
        }
    }
    console.log(evenSum)
}
sumEvenNums(['1','2','3','4','5','6'])