function heroes(input) {

    let heroesCount = input.shift();

    let party = {};
    for (let heroes = 0; heroes < heroesCount; heroes++) {
        let heroData = input.shift()
        let [name, hp, mp] = heroData.split(' ')

        let hero = {
            hp: Number(hp),
            mp: Number(mp)
        }
        party[name] = hero
    }

    while (input[0] != 'End') {

        let line = input.shift();
        let tokens = line.split(' - ');
        let command = tokens[0]
        let name = tokens[1];

        switch (command) {
            case "CastSpell":
                let manaNeeded = Number(tokens[2])
                let spell = tokens[3]
                if (party[name].mp >= manaNeeded){
                    party[name].mp -= manaNeeded;
                    console.log(`${name} has successfully cast ${spell} and now has ${party[name].mp} MP!`)
                }else {
                    console.log(`${name} does not have enough MP to cast ${spell}!`)
                }
                break;

            case "TakeDamage":
                let damage = Number(tokens[2]);
                let attacker = tokens[3];
                party[name].hp -= damage
                if (party[name].hp > 0){
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${party[name].hp} HP left!`)
                }else {
                    console.log(`${name} has been killed by ${attacker}!`)
                    delete party[name]
                }
                break;

            case "Recharge":
                let mpToRestore = Number(tokens[2]);
          
                if (mpToRestore + party[name].mp > 200){
                    mpToRestore = 200 - party[name].mp
                }
                party[name].mp += mpToRestore
                console.log(`${name} recharged for ${mpToRestore} MP!`)
                break;
            case "Heal":
                let hpToRestore = Number(tokens[2]);
          
                if (hpToRestore + party[name].hp > 100){
                    hpToRestore = 100 - party[name].hp
                }
                party[name].hp += hpToRestore
                console.log(`${name} healed for ${hpToRestore} HP!`)
                break;
        }
    }
    for (let name in party){
        let hero = party[name]
        console.log(name)
        console.log(`  HP: ${hero.hp}`)
        console.log(`  MP: ${hero.mp}`)
    }
}
heroes([2
    , 'Solmyr 85 120'
    , 'Kyrre 99 50'
    , 'Heal - Solmyr - 10'
    , 'Recharge - Solmyr - 50'
    , 'TakeDamage - Kyrre - 66 - Orc'
    , 'CastSpell - Kyrre - 15 - ViewEarth'
    , 'End'])