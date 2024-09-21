function lastKNumbersSequance(n, k) {
    let arr = [1];

    while (n > arr.length) {
        let sum = 0;

        if (arr.length <= k) {
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            arr.push(sum)
        } else {
            for (let i = arr.length - 1; arr.length - k <= i; i--) {
                sum += arr[i];
            }
            arr.push(sum)
        }
    }
    console.log(arr.join(' '))
}
lastKNumbersSequance(6, 3)
lastKNumbersSequance(8, 2)