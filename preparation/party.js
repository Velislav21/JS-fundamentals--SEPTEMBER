function party(input){

    let guests = []
    for (let line of input){

        let tokens = line.split(' ');
        let name = tokens[0];

        if (tokens[1] == "is" && tokens[2] !== "not" ){
            if (guests.includes(name)){
                console.log(`${name} is already in the list!`)
            }else {
                guests.push(name)
            }
        } else if (tokens[1] == "is" && tokens[2] == "not"){
            if (guests.includes(name)){
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(guests.join('\n'))
}


party(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])