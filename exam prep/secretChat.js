function secretChat(input) {

    let message = input.shift()

    while (input[0] != "Reveal") {

        let line = input.shift();
        let tokens = line.split(':|:');
        let command = tokens[0];

        switch (command) {
            case "InsertSpace":

                let index = Number(tokens[1]);
                let firstHalf = message.slice(0, index);
                let secondHalf = message.slice(index);
                message = firstHalf + " " + secondHalf;
                break;

            case "Reverse":

                let substring = tokens[1];
                let subStrIndex = message.indexOf(substring);
                let leftHalf = message.slice(0, subStrIndex);
                let rightHalf = message.slice(subStrIndex)

                if (subStrIndex == -1){
                    console.log('error')
                    continue
                }
                
                let reversed = rightHalf.split('').reverse().join('')
                message = leftHalf + reversed
                break;

            case "ChangeAll":

                let charToSwap = tokens[1];
                let replacement = tokens[2];
                message = message.split(charToSwap).join(replacement);
                break;
        }
        console.log(message)
    }
    console.log(`"You have a new text message: ${message}"`)
}
secretChat([

  

        'Hiware?uiy',
        
        'ChangeAll:|:i:|:o',
        
        'Reverse:|:?uoy',
        
        'Reverse:|:jd',
        
        'InsertSpace:|:3',
        
        'InsertSpace:|:7',
        
        'Reveal'
])