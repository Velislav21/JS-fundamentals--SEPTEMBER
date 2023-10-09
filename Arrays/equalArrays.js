function identical(arr1, arr2){

    let arr1Sum = 0;
    let isEqual = true;

    for (let i = 0; i < arr1.length; i++){

        arr1[i] = Number(arr1[i]);
        arr2[i] = Number(arr2[i]);

        if (arr1[i] == arr2[i]){
            arr1Sum += arr1[i];
        }else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        }
    }
    if (isEqual){
        console.log(`Arrays are identical. Sum: ${arr1Sum}`)
    }
    
}
identical(['10','20','30'],

['10','20','30'])