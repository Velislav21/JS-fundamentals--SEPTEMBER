function hero(input) {

    let line = input.shift();
    let heroes = {};

    //  key - {spellName: spellName}
    while (line != 'End') {

        let tokens = line.split(' ')
        let command = tokens[0]
        let name = tokens[1];
        let spellBook = {}
        switch (command) {
            case "Enroll": {
                if (name in heroes) {
                    console.log(`${name} is already enrolled.`)
                } else {
                    heroes[name] = spellBook
                }
            }
                break;
            case "Learn": {
                let spellName = tokens[2];

                spellBook = {
                    spellName: spellName
                }

                if (name in heroes) {
                    if (heroes[name].spellBook == undefined) {
                        heroes[name] = spellBook

                    } else {
                        console.log(`${name} has already learnt ${spellName}`)
                    }
                } else {
                    console.log(`${name} doesn't exist.`)
                }
            }
                break;
            case "Unlearn": {
                let spellName = tokens[2]
                spellBook = {
                    spellName: spellName
                }
                if (name in heroes) {
                    let info = heroes[name].spellName
                    if (!info in spellBook){
                        heroes[name] = spellBook
                    }else {
                        console.log(`${name} doesn't know ${spellName}.`)
                    }

                } else {
                    console.log(`${name} doesn't exist.`)
                }

            }
                break;
        }
        line = input.shift()
    }
    console.log("Heroes:")
    for (let hero in heroes) {
        let name = heroes[hero]
        if (name.spellName == undefined) {
            console.log(`== ${hero}:`)
        } else {
            console.log(`== ${hero}: ${name.spellName}`)
        }
    }
}


hero((["Enroll Stefan",

    "Learn Stefan ItShouldWork",

    "Learn Stefan ItShouldWork",

    "Unlearn Stefan ItShouldWork",

    "End"]))