function bombNum(nums, bombInfo) {

    let [bombNum, power] = bombInfo;

    while (nums.includes(bombNum)) {

        let index = nums.indexOf(bombNum)
        nums.splice(Math.max(0, index - power), power * 2 + 1)
    }
    let sum = 0

    for (let num of nums) {
        sum += num
    }
    console.log(sum)
}
bombNum([1,2, 1, 1, 1], [2, 3])

//bombNum([1, 4, 4, 2, 8, 9, 1], [9, 3])