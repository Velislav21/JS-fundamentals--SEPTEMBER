function train(input) {

    let wagons = input[0].split(' ').map(Number) // 32 54 21 12 4 0 23

    let maxCapacity = Number(input[1]); // 75

    for (let i = 2; i < input.length; i++) {
        let command = input[i];
        let tokens = command.split(' ');

        if (tokens[0] == "Add") {
            wagons.push(Number(tokens[1]));

        } else {
            let passangers = Number(tokens[0])

            for (let i = 0; i < wagons.length; i++) {
                let currWagon = wagons[i];

                if (passangers + currWagon <= maxCapacity) {
                    wagons[i] = passangers + currWagon;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '))

}
//train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])