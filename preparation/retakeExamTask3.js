function spices(input){

    let spices = input.shift().split(', ');
    let line = input.shift();

    while (line !== 'done'){

        let tokens = line.split(' ');
        let command = tokens[0];

        if (command == "AddSpice"){

            let spice = tokens[1];
            if (!spices.includes(spice)){
                spices.push(spice)
            }

        }else if (command == "AddManySpices"){

            let index = Number(tokens[1]);
            let spicesToAdd = tokens[2].split('|')
            for (let i = spicesToAdd.length - 1; i >= 0; i--){
                spices.splice(index, 0, spicesToAdd[i])
            }

        }else if (command == "SwapSpices"){
            let spice1 = tokens[1];
            let spice2 = tokens[2];

            let spice1Index = spices.indexOf(spice1)
            let spice2Index = spices.indexOf(spice2)

            if (spices[spice1Index] && spices[spice2Index]){

                spices[spice1Index] = spice2;
                spices[spice2Index] = spice1;
            }

        }else if (command == "ThrowAwaySpices"){
            let spice = tokens[1];
            let count = Number(tokens[2]);

            let spiceIndex = spices.indexOf(spice)

            if (spices.includes(spice)){
                spices.splice(spiceIndex, count)
            }

        }else if (command == "Arrange"){
            spices.sort((a, b) => a.localeCompare(b))
        }
        line = input.shift();
    }
    console.log(spices.join(' '))
}
spices(['coriander, cloves, paprika, cumin',
'AddSpice nutmeg',
'AddSpice anise',
'AddSpice turmeric',
'AddSpice cumin',
'SwapSpices coriander paprika',
'ThrowAwaySpices cumin 4',
'done'])