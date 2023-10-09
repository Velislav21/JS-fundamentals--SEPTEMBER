function evenAndOdd(arr){

    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < arr.length; i++){

        if (arr[i] % 2 == 0){
            sumEven += arr[i]
        }else {
            sumOdd += arr[i]
        }
    }
    console.log(sumEven - sumOdd)
}
evenAndOdd([1,2,3,4,5,6])