function activationKeys(input){

    let activationKey = input.shift();

    let string = activationKey;

    let resultString = string;
    let line = input.shift();
    while (line != "Generate"){

        let [command, ...arguments] = line.split('>>>')
        
        if (command == "Contains"){
            let substring = arguments[0]

            activationKey = string
            if (activationKey.includes(substring)){
                console.log(`${activationKey} contains ${substring}.`)

            }else {
                console.log(`Substring not found!`)
            }


        }else if (command == "Flip"){
            let charCase = arguments[0];
            let startIndex = Number(arguments[1]);
            let endIndex = Number(arguments[2]);

            let substring = string.substring(startIndex, endIndex)

            if (charCase == "Upper"){
                substring = substring.toUpperCase()

            }else if (charCase == "Lower") {
                substring = substring.toLowerCase()
            }

            string = string.substring(0, startIndex) + substring + string.substring(endIndex)
            resultString = string
            console.log(resultString)

        }else if (command == "Slice"){

            let startIndex = Number(arguments[0]);
            let endIndex = Number(arguments[1]);

            string = string.slice(0, startIndex) + string.slice(endIndex)
            resultString = string
            console.log(resultString)

        }
        line = input.shift()
    }

    console.log(`Your activation key is: ${string}`)
}
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])