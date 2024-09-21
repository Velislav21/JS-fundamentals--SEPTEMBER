function filter(arr){

    let value = 5
    arr = arr.filter(num => num < value);
    console.log(arr)
}
filter([1, 2, 3, 1, 2, 3, 10, 10, 6, 4, 10])