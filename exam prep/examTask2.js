function messageTranslator(input) {

    let messagesCount = Number(input.shift());
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[A-Za-z]{7,})\]/g
    let result = ''
    for (let i = 0; i < messagesCount; i++) {

        let message = input.shift();

        let match = message.match(pattern)

        if (match !== null) {
                match = message.matchAll(pattern)
                for (let info of match){
                    let stringToIterate = info.groups.string
                    for (let char of stringToIterate){
                        result += char.charCodeAt() + " "
                    }
                    console.log(`${info.groups.command}: ${result}`)
                }
        }else {
            console.log(`The message is invalid`)
        }
    }
}
// messageTranslator((["3",

//     "go:[outside]",

//     "!drive!:YourCarToACarWash",

//     "!Watch!:[LordofTheRings]"]))

messageTranslator(["2",

"!Send!:[IvanisHere]",

"*Time@:[Itis5amAlready"])