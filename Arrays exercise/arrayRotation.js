function rotations(arr, rotations){
/*
    let removedNumber = arr.shift()
    console.log(removedNumber)
    console.log(arr)
    console.log(arr.push(removedNumber))
    console.log(arr)

*/
    for (let i = 0; i < rotations; i++){
        let removedNumber = arr.shift()
        arr.push(removedNumber)      
    }
    console.log(arr.join(" "))
}
rotations([51, 47, 32, 61, 21], 2)








// 51, 47, 32, 61, 21 -----> Първа ротация : 47, 32, 61, 21, 51 --------> Втора Ротация : 32, 61, 21, 51, 47
