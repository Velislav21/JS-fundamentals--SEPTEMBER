function imitate(input) {

    let msg = input.shift();

    let command = input.shift()
    while (command != 'Decode') {

        let tokens = command.split('|');
        let action = tokens[0];

        if (action == "Move") {
            let lettersCount = Number(tokens[1]);
            let firstLetters = msg.slice(0, lettersCount)
            msg = msg.replace(firstLetters, '') + firstLetters

        } else if (action == "Insert") {
            let index = Number(tokens[1]);
            let value = tokens[2];
            msg = msg.slice(0, index) + value + msg.slice(index);
        } else {
            let substring = tokens[1]
            let replacement = tokens[2]

            while (msg.includes(substring)) {
                msg = msg.split(substring).join(replacement)
            }
        }
        command = input.shift();
    }
    console.log(`The decrypted message is: ${msg}`)
}
imitate([

    'zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode'

])