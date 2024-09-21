function arrModifier(arr) {

    let nums = arr.shift().split(' ').map(Number);
    for (let command of arr) {

        let tokens = command.split(' ');
        let modification = tokens[0];
        let firstIndex = Number(tokens[1]);
        let secondIndex = Number(tokens[2]);

        if (modification == "swap") {
            let firstNumberFromArr = nums[firstIndex];
            let secondNumberFromArr = nums[secondIndex];

            nums.splice(firstIndex, 1, secondNumberFromArr);
            nums.splice(secondIndex, 1, firstNumberFromArr);


        } else if (modification == "multiply") {

            nums[firstIndex] = nums[firstIndex] * nums[secondIndex];

        } else if (modification == "decrease") {
            let newArr = []
            for (let num of nums) {
                num -= 1
                newArr.push(num)
            }
            nums = newArr

        } else if (modification == "end") {
            console.log(nums.join(', '))
            return
        }
    }
}
arrModifier([
    '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
])
// arrModifier([
//     '1 2 3 4',
//     'swap 0 1',
//     'swap 1 2',
//     'swap 2 3',
//     'multiply 1 2',
//     'decrease',
//     'end'
//   ])
