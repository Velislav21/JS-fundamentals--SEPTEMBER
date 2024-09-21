function tour(input) {

    let string = input.shift();
    let resultString = string
    let line = input.shift();
    while (line != "Travel") {

        let [command, ...arguments] = line.split(':');
        switch (command) {
            case "Add Stop":
                let index = Number(arguments[0]);
                let newString = arguments[1];
                let isValid = false;
                if (string.length - index >= 0) {
                    isValid = true;
                }
                if (isValid) {   // Hawai -  //01234
                    string = string.substring(0, index) + newString + string.substring(index)
                }
                resultString = string
                console.log(resultString)
                break;
            case "Remove Stop":
                let startIndex = Number(arguments[0]);
                let endIndex = Number(arguments[1]);

                let validIndexes = false;

                if ((string.length - startIndex >= 0) && (string.length - endIndex >= 0)){
                    validIndexes = true;
                }

                if (validIndexes) {
                    string = string.substring(0, startIndex) + string.substring(endIndex + 1);
                }
                resultString = string
                console.log(resultString)
                break;
            case "Switch":
                let oldString = arguments[0];
                let replacementString = arguments[1];

                if (string.includes(oldString)) {

                    while (string.includes(oldString)) {
                        string = string.replace(oldString, replacementString)
                    }
                }
                resultString = string
                console.log(resultString)
                break;
        }
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${resultString}`)
}
tour((["Hawai::Cyprys-Greece",

    "Add Stop:7:Rome", // Add Stop (2) ['7', 'Rome']

    "Remove Stop:11:16", // Remove Stop (2) ['11', '16']

    "Switch:Hawai:Bulgaria", //Switch (2) ['Hawai', 'Bulgaria']
    "Switch:Bulgaria:Pomorie", //Switch (2) ['Hawai', 'Bulgaria']

    "Travel"]))