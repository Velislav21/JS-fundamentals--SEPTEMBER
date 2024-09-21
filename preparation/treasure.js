function treasure(input) {

    let treasureChest = input.shift().split('|');

    let line = input.shift();
    while (line != "Yohoho!") {

        let tokens = line.split(' ')
        let command = tokens.shift()

        if (command == "Loot") {

            for (let item of tokens) {
                if (!treasureChest.includes(item)) {
                    treasureChest.unshift(item);
                }
            }
        } else if (command == "Drop") {

            let index = Number(tokens);
            if (treasureChest[index]) {
                let loot = treasureChest.splice(index, 1)
                treasureChest.push(loot[0])
            }
        } else if (command == "Steal") {
            let count = Number(tokens);
            let stolenItems = [];

            if (count >= treasureChest.length) {
                stolenItems = treasureChest
                treasureChest = []
                console.log(stolenItems.join(', '))
            } else {
                let startStealingIndex = treasureChest.length - count
                stolenItems = treasureChest.splice(startStealingIndex)
                console.log(stolenItems.join(', '))
            }
        }
        line = input.shift();
    }
    let treasureGain = 0;
    for (let item of treasureChest) {
        treasureGain += item.length
    }
    if (treasureChest.length > 0) {
        console.log(`Average treasure gain: ${(treasureGain / treasureChest.length).toFixed(2)} pirate credits.`)
    } else {
        console.log(`Failed treasure hunt.`)
    }
}
treasure(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])