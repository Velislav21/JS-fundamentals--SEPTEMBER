function sort(array){

    let myArr = []

    
    for (let num of array){
        let maxNum = Math.max(...array)
        let minNum = Math.min(...array)
        
        myArr.push(maxNum, minNum);
        array.splice(array.indexOf(maxNum), 1)
        array.splice(array.indexOf(minNum), 1)
    }
    console.log(myArr)
}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])