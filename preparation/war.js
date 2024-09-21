function war(input) {

    let pirateShipStatus = input.shift().split('>').map(Number);
    let warShipStatus = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift())

    let line = input.shift();
    let sectionsForRepairCount = 0;
    let pirateShipSunken = false;
    let warShipSunken = false;


    while (line != "Retire") {

        let tokens = line.split(' ');
        let command = tokens.shift();

        if (command == "Fire") {
            let index = Number(tokens[0])
            let damage = Number(tokens[1])

            if (warShipStatus[index]) {
                warShipStatus[index] -= damage;
                if (warShipStatus[index] <= 0) {
                    warShipSunken = true
                    console.log(`You won! The enemy ship has sunken.`);
                    return
                }

            } else if (command == "Defend") {
                let startIndex = Number(tokens[0]);
                let endIndex = Number(tokens[1]);
                let damage = Number(tokens[2]);

                if (pirateShipStatus[startIndex] && pirateShipStatus[endIndex]) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShipStatus[i] -= damage
                        if (pirateShipStatus[i] <= 0) {
                            pirateShipSunken = true;
                            console.log(`You lost! The pirate ship has sunken.`);
                            return
                        }
                    }
                } else if (command == "Repair") {
                    let index = Number(tokens[0]);
                    let health = Number(tokens[1]);

                    if (pirateShipStatus[index]) {
                        pirateShipStatus[index] += health;
                        if (pirateShipStatus[index] > maxHealth) {
                            pirateShipStatus[index] = maxHealth;
                        }
                    }
                } else if (command == "Status") {

                    for (let section of pirateShipStatus) {
                        if (section < (maxHealth * 0.2)) {
                            sectionsForRepairCount++;
                        }
                    }
                    console.log(`${sectionsForRepairCount} sections need repair.`)
                }

                line = input.shift();
            }
            let pirateShipSum = 0;

            for (let section of pirateShipStatus) {
                pirateShipSum += section
            }

            let warShipSum = 0;

            for (let section of warShipStatus) {
                warShipSum += section
            }

            if (pirateShipSunken == false && warShipSunken == false) {
                console.log(`Pirate ship status: ${pirateShipSum}`)
                console.log(`Warship status: ${warShipSum}`)
            }
        }
    }
}
war(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
