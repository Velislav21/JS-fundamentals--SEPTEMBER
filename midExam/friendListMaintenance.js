function friendListMaintenance(input) {

    let friends = input.shift().split(', ');
    let report = input.pop()
    let blackListCounter = 0
    let lostNames = 0;
    for (let command of input) {

        let tokens = command.split(' ')
        let action = tokens[0];
        let value = tokens[1];

        if (action == "Blacklist") {
            
            let name = value;
            let index = friends.indexOf(name)
            
            if (friends.includes(name)) {
                blackListCounter++;
                console.log(`${name} was blacklisted.`);
                friends[index] = "Blacklisted"

            } else {
                console.log(`${value} was not found.`);
            }

        } else if (action == "Error") {
            let index = Number(value);
            let name = friends[index]
            if (index >= 0 && index <= friends.length) {

                if (friends.includes(name) && name != "Blacklisted" && name != "Lost") {
                    console.log(`${name} was lost due to an error.`)
                    friends[index] = "Lost";
                    lostNames++;
                }
            }
        } else if (action == "Change"){
            let index = Number(value);
            let name = friends[index]
            let newName = tokens[2];

            if (index >= 0 && index < friends.length){
                console.log(`${name} changed his username to ${newName}.`)
                friends[index] = newName
            }else {
                continue
            }
        }
    }
    
    console.log(`Blacklisted names: ${blackListCounter}`)
    console.log(`Lost names: ${lostNames}`)
    console.log(friends.join(' '))
}
friendListMaintenance(["Mike, John, Eddie",

    "Blacklist Mike",

    "Error 0",

    "Report"])
// friendListMaintenance((["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]))