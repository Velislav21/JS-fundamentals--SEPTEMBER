function cs(input) {

    let energy = Number(input.shift())

    let battlesWon = 0;

    for (let line of input) {

        if (line != "End of battle") {
            let distance = Number(line)
            if (energy >= distance) {
                battlesWon++;
                if (battlesWon % 3 == 0) {
                    energy += battlesWon;
                }
                energy -= distance
            }else { 
                console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`)
                return
            }
        }else {
            console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`)
        }
    }
}
cs((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]))

// cs((["200",
//     "54",
//     "14",
//     "28",
//     "13",
//     "End of battle"]))