function sumpairs(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] + arr[i + 1] > arr.length){
            
        }
        sum += arr[i] + arr[i + 1]
    }
    console.log(sum)
}
sumpairs([1, 2, 4, 5, 6, 7, 8])