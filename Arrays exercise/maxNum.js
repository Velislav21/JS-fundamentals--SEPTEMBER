function maxNum(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        let currentNumber = arr[i];
        let isTopInteger = true;

        for (let j = i + 1; j < arr.length; j++) {
            let rightNumber = arr[j];
            if (rightNumber >= currentNumber) {

                isTopInteger = false;
                break;
            }

        }
        if (isTopInteger) {
            newArr.push(currentNumber)
        }
    }
    console.log(newArr.join(' '))
}
//maxNum([1, 4, 3, 2])
maxNum([14, 24, 3, 19, 15, 17])
//maxNum([41, 41, 34, 20])
//maxNum([27, 19, 42, 2, 13, 45, 48])