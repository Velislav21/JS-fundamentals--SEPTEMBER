function nums(input) {

    let numbers = input.shift().split(' ').map(Number)

    let line = input.shift();
    while (line !== "END") {

        let tokens = line.split(' ')
        let command = tokens[0]

        if (command == "add") {
            for (let i = tokens.length - 1; i >= 3; i--) {
                let num = Number(tokens[i]);
                numbers.unshift(num)
            }

        } else if (command == "remove" && tokens[1] == "greater") {
            let value = Number(tokens[tokens.length - 1]);

            numbers = numbers.filter(num => num < value);

        } else if (command == "replace") {
            let value = Number(tokens[1]);
            let replacement = Number(tokens[2]);

            if (numbers.includes(value)) {
                numbers[numbers.indexOf(value)] = replacement
            }
        } else if (command == "remove") { // remove at index [index]
            let index = Number(tokens[3])

            if (numbers[index]) {
                numbers.splice(index, 1)
            }
        } else if (command == "find" && tokens[1] == "even") {
            let even = numbers.filter(num => num % 2 == 0);
            console.log(even.join(' '))

        } else if (command == "find" && tokens[1] == "odd") {
            let odd = numbers.filter(num => num % 2 !== 0);
            console.log(odd.join(' '))
        }
        line = input.shift()
    }
    console.log(numbers.join(', '))
}

nums(["1 2 3 10 10 6 4 10",
    "add to start 1 2 3",
    "find odd",
    "replace 1 1.1",
    "remove greater than 5",
    "remove at index 3",
    "find even",
    "END"])