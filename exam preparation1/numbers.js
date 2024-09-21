function numbers(input){

    let nums = input.split(' ').map(Number);
    
    let sorted = nums.sort((a, b) => b - a);
    let sum = 0;
    let sumOfAllNums = sorted.reduce((accumulator, currentNumber) => accumulator + currentNumber, sum);
    let avg = sumOfAllNums / sorted.length
    
    let newArr = [];
    for (let value of sorted){

        if (newArr.length == 5){
            console.log(newArr.join(' '));
            return;
        }
        if (value > avg){
            newArr.push(value);
        }
    }
    if (newArr.length == 0){
        console.log('No')
    }else {
        console.log(newArr.join(' '))
    }
}
// numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')