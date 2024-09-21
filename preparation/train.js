function train(input) {

    let wagons = input.shift().split(' ').map(Number);

    let maxCapacity = Number(input.shift());
    for (let line of input) {

        let tokens = line.split(' ')

        if (tokens[0] == "Add") {
            wagons.push(Number(tokens[1]))
        } else {
            let passangers = Number(tokens[0]);
            for (let i = 0; i < wagons.length; i++) {

                if (wagons[i] + passangers <= maxCapacity) {
                    wagons[i] += passangers
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '))
}
train(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6'])