function inventory(input) {

    let invent = input.shift().split(', ');

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' - ');
        let command = tokens[0];
        let item = tokens[1];

        if (command == "Collect") {
            if (!invent.includes(item)) {
                invent.push(item)

            } else if (command == "Drop") {
                if (invent.includes(item)) {
                    invent.splice(invent.indexOf(item), 1)
                }
            } else if (command === "Combine Items" && tokens[1].includes(':')) {

                let [oldItem, newItem] = tokens[1].split(':');
                if (invent.includes(oldItem)) {
                    invent.splice(invent.indexOf(oldItem) + 1, 0, newItem);
                }
            } else if (command == "Renew") {
                if (invent.includes(item)) {
                    invent.splice(invent.indexOf(item), 1)
                    invent.push(item)
                }
            } else if (command == "Craft!") {
                console.log(invent.join(', '));
                break;
            }
        }
    }
}
inventory([
    'Iron, Wood, Sword, Shield, Bow',
    'Combine Items - Shield:Spear',
    'Collect - Gold',
    'Drop - Sword',
    'Combine Items - Sword:Bow',
    'Drop - Iron',
    'Collect - Sword',
    'Renew - Wood',
    'Craft!'
])