function password(input) {

    let string = input.shift();
    let command = input.shift();

    let password = '';

    while (command != 'Done') {

        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action == "TakeOdd") {
            for (let currIndex = 0; currIndex < string.length; currIndex++) {
                if (currIndex % 2 != 0) {
                    password += string[currIndex]
                }
            }
            string = password
            console.log(string);
            command = input.shift();
            continue;
        } else if (action == "Cut") {

            string = password
            let index = Number(tokens[0]);
            let length = Number(tokens[1]);
            let substr = password.substring(index, index + length);
            if (password.includes(substr)) {
                password = password.substring(0, index) + password.substring(index + length);
            }
            console.log(string);
            command = input.shift();
            continue;
        }

        else {
            string = password
            let substring = tokens[0];
            let substitute = tokens[1];

            if (password.includes(substring)) {
                while (password.includes(substring)) {
                    password = password.replace(substring, substitute);
                }
                console.log(string);

            } else {
                console.log(`Nothing to replace!`);
            }
        }
        command = input.shift();
    }
    console.log(`Your password is: ${string}`)
}
password((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
// "TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]))