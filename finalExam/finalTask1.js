function easter(input){

    let string = input.shift();

    let line = input.shift();
    while (line !== "Easter"){
        let tokens = line.split(' ');
        let command = tokens[0];

        if (command == "Replace"){
            let currChar = tokens[1];
            let newChar = tokens[2];

            while (string.includes(currChar)){
                string = string.replace(currChar, newChar)
            }
            console.log(string)
        }else if (command == "Remove"){
            let substring = tokens[1];

            if (string.includes(substring)){
                string = string.replace(substring, '')
            }
            console.log(string)
        } else if (command == "Includes"){
            let str = tokens[1];
            if (string.includes(str)){
                console.log(`True`)
            }else {
                console.log(`False`);
            }
        } else if (command == "Change"){

            let letterCase = tokens[1];
            if (letterCase == "Upper"){
                string = string.toUpperCase();
            }else { 
                string = string.toLowerCase();
            }
            console.log(string)

        } else if (command == "Reverse"){
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            if (string[startIndex] && string[endIndex]){
                
                let substring = string.substring(startIndex, endIndex + 1)
                let reversed = substring.split('').reverse().join('')
                console.log(reversed)
            }

        }

        line = input.shift()
    }
}
// easter(['EasteriEggsscomming',
// 'Replace i I',
// 'Remove Eggs',
// 'Remove commIng',
// 'Change Lower',
// 'Reverse 0 17',
// 'Easter'])
easter(['Easterbscomming',
'Replace b I',
'Remove commIng',
'Change Upper',
'Reverse 0 5',
'Easter'])