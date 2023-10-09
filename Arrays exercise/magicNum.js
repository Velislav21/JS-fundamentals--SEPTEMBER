function magicNum(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i]

        for (let j = i + 1; j < arr.length; j++) {
            if (currentNumber + arr[j] === sum) {
                console.log(currentNumber, arr[j])
            }
        }
    }
}
magicNum([1, 7, 6, 2, 19, 23],

    8)
//magicNum([14, 20, 60, 13, 7, 19, 8],

//    27)
//magicNum([1, 2, 3, 4, 5, 6],

//  6)