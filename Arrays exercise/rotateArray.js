function rotate(input) {

    let rotations = input.pop()
    
    for (let i = 0; i < rotations; i++) {

        let popped = input.pop()
        input.unshift(popped)
    }
    console.log(input.join(" "))
}
rotate(['1', '2', '3', '4', '2'])
rotate(['Banana', 'Orange', 'Coconut',

'Apple', '15'])