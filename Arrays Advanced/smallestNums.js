function smallestNums(arr){

    let sorted = arr.sort((a,b) => {
        return a - b
    })
    console.log(sorted.slice(0, 2).join(' '))
}
smallestNums([30, 15, 50, 5])
smallestNums([3, 0, 10, 4, 7, 3])