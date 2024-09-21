function nums(inputArr){

    let newArr = [];

    for (let num of inputArr){
        if (num >= 0){
            newArr.push(num)
        }else{
            newArr.unshift(num)
        }
    }
    console.log(newArr.join('\n'))
}
nums(['7', '-2', '8', '9'])
nums(['3', '-2', '0', '-1'])