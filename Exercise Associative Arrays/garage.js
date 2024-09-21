function garage(input){

    let garages = {}

    for (let string of input){

        let garageNumber = string.split(' ').splice(0, 1);
        let line = string.split(', ')
        console.log(garageNumber)
    }
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])