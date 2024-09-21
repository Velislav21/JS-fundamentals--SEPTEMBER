function stringGame(input) {

    let string = input.shift();
    let result = ''
    let line = input.shift();

    while (line != "Done") {

        let [command, ...arguments] = line.split(' ');
        switch (command) {

            case "Change": {
                let char = arguments[0];
                let replacement = arguments[1];
                while (string.includes(char)) {
                    string = string.replace(char, replacement)
                }
                result = string
                console.log(result)
            }
                break;
            case "Includes": {
                let substring = arguments[0]
                if (string.includes(substring)) {
                    console.log('True');
                } else {
                    console.log('False')
                }
                result = string
            }
                break;
            case "End": {
                let substring = arguments[0];
                if (string.endsWith(substring)) {
                    console.log(`True`)
                } else {
                    console.log('False')
                }
                result = string
            }
                break;
            case "Uppercase": {
                string = string.toUpperCase()
                result = string
                console.log(result)
            }
                break;
            case "FindIndex": {

                let char = arguments[0];
                console.log(string.indexOf(char))
                break;
            }
            case "Cut": {
                let startIndex = Number(arguments[0]);
                let count = Number(arguments[1]);
                
                let char = string.charAt(startIndex)
                let cutPart = string.substring(startIndex, startIndex + count)
                console.log(cutPart)
            }
                break;

        }
        line = input.shift()
    }
}
stringGame((["//Th1s 1s my str1ng!//", "Change 1 i", "Includes string", "End my", "Uppercase", "FindIndex I", "Cut 5 5", "Done"]))