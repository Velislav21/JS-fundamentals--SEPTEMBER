function printEl(input) {

    let step = input.pop()

    let newArr = []
    for (let i = 0; i < input.length; i++) {
        if (i % step == 0){
            newArr.push(input[i])
        }
    }
    console.log(newArr.join(" "))
}
printEl(['5', '20', '31', '4', '20', '2']);
printEl(['dsa', 'asd', 'test', 'test', '2'])