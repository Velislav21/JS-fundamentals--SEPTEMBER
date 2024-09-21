function arrManipulator(nums, commands) {

    for (let command of commands) {
        let tokens = command.split(' ')
        let manipulation = tokens[0]

        if (manipulation == "add") {
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);

            nums.splice(index, 0, element);

        } else if (manipulation == "addMany") {
            let index = Number(tokens[1]);
            let numsToAdd = tokens.slice(2,)

            for (let num of numsToAdd) {
                nums.splice(index, 0, Number(num))
                index++
            }
        } else if (manipulation == "contains") {
            let num = Number(tokens[1])
            let index = nums.indexOf(num);
            console.log(index);

        } else if (manipulation == "remove") {
            let index = Number(tokens[1]);
            nums.splice(index, 1);

        } else if (manipulation == "shift") {
            let rotations = Number(tokens[1]);

            for (let i = 0; i < rotations; i++) {
                let shifted = nums.shift();
                nums.push(shifted);
            }
        } else if (manipulation == "sumPairs") {
            let pairedArr = []

            for (let i = 0; i < nums.length; i += 2) {
                if (i + 1 < nums.length) {
                    pairedArr.push(nums[i] + nums[i + 1])
                } else {
                    pairedArr.push(nums[i])
                }
            }
            nums = pairedArr
        } else if (manipulation == "print") {
            console.log(`[ ${nums.join(', ')} ]`)
        }
    }
}
//arrManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
arrManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])