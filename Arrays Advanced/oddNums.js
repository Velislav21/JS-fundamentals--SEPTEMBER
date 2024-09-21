function oddNums(arr) {
    /*
        let resultArr = [];
    
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 != 0) {
                resultArr.push(arr[i] * 2)
            }
        }
        console.log(resultArr.reverse().join(" "))
    */
    let oddPositionNums = arr.filter((el, i) => i % 2 !== 0);
    let doubledNums = oddPositionNums.map(a => a * 2);
    console.log(doubledNums.reverse().join(" "));
}
oddNums([10, 15, 20, 25])
oddNums([3, 0, 10, 4, 7, 3])

