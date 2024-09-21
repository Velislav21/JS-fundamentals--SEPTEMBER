function lift(input) {
    let capacity = Number(input[0]);
    let wagons = input[1].split(' ').map(Number)
    // let wagonIndex = 0;

    for (let i = 0; i < wagons.length; i++) {

        while (wagons[i] < 4) {
            wagons[i]++
            capacity--
            if (capacity == 0 || wagons[wagons.length - 1] == 4) {

                if (capacity == 0 && wagons[wagons.length - 1] < 4) {
                    console.log(`The lift has empty spots!`)
                    console.log(wagons.join(' '))
                    return
                }
                if (wagons[wagons.length - 1] == 4 && capacity >= 1) {
                    console.log(`There isn't enough space! ${capacity} people in a queue!`)
                    console.log(wagons.join(' '))
                    return
                }

                if (wagons[wagons.length - 1] == 4 && capacity == 0) {
                    console.log(wagons.join(' '))
                    return
                }
            }
        }
        if (wagons[wagons.length - 1] == 4 && capacity >= 1) {
            console.log(`There isn't enough space! ${capacity} people in a queue!`)
            console.log(wagons.join(' '))
            return
        }
    }
}
lift([
    "20",
    "0 2 0"
])