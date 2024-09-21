function party(input) {

    let vipGuests = {};
    let regularGuests = {};
    let guestsWhoDidntCome = {};

    for (let guests of input) {

        let firstChar = guests.split('').shift();

        if (firstChar.charCodeAt() >= 48 && firstChar.charCodeAt() <= 57) {
            vipGuests[guests] = guests;
        } else {
            if (regularGuests.hasOwnProperty('PARTY')) {
                delete regularGuests['PARTY']
            }
            regularGuests[guests] = guests
        }
    }
    let partyIndex = input.indexOf('PARTY');
    let guestsList = input.slice(0, partyIndex);

    let guestWhoCame = input.slice(partyIndex + 1);

    for (guest of guestsList) {

        if (!guestWhoCame.includes(guest)) {
            guestsWhoDidntCome[guest] = guest;
        }
    }
    
    let keys = Object.keys(guestsWhoDidntCome)
    console.log(keys.length)

    for (let key of keys){
        if (key in vipGuests && key in guestsWhoDidntCome){
            console.log(vipGuests[key])
        }
        if (key in regularGuests && key in guestsWhoDidntCome){
            console.log(regularGuests[key])
        }
    }
}

party(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])