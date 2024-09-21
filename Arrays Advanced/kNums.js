function kNums(input) {

    let kNumber = input.shift();

    let firstK = input.slice(0, kNumber)
    let lastK = input.slice(input.length - kNumber)
    console.log(firstK.join(' '))
    console.log(lastK.join(' '))
}
kNums([2, 7, 8, 9])

//kNums([3, 6, 7, 8, 9])