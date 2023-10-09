function operations(arr){

    let newArr = [];
    let arrSum = 0;
    let newArrSum = 0;

    for (let i = 0; i < arr.length; i++){
        let currentNumber = arr[i]
        arrSum += currentNumber

        if (currentNumber % 2 == 0){
            newArr.push(currentNumber + i)
            newArrSum += currentNumber + i
        }else {
            newArr.push(currentNumber - i)
            newArrSum += currentNumber - i
        }
    }
    console.log(newArr)
    console.log(arrSum)
    console.log(newArrSum)
}
operations([5, 15, 23, 56, 35]) 