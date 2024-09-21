function game(input) {

    let hp = 100;
    let btc = 0;
    let rooms = input.split('|')
    for (let i = 0; i < rooms.length; i++) {

        let room = rooms[i].split(' ')

        let command = room[0];
        let value = Number(room[1]);

        if (command == "potion") {
            
            if (hp + value > 100) {
                value = 100 - hp
            }
            hp += value
            console.log(`You healed for ${value} hp.`)
            console.log(`Current health: ${hp} hp.`)

        } else if (command == "chest") {
            console.log(`You found ${value} bitcoins.`)
            btc += value
        } else {
            let monsterType = command;
            hp -= value;
            if (hp <= 0) {
                console.log(`You died! Killed by ${monsterType}.`)
                console.log(`Best room: ${i + 1}`)
                return
            } else {
                console.log(`You slayed ${monsterType}.`)
            }
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${btc}`);
    console.log(`Health: ${hp}`)
}
//game("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
game("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")