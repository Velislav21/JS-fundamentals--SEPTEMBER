function store(input) {

    let type = input.pop();

    let prices = input.map(Number);
    let totalPrice = 0;

    for (let price of prices) {
        if (price < 0) {
            console.log("Invalid price!")
            continue;
        }
        totalPrice += price
    }
    if (totalPrice == 0){
        console.log(`Invalid order!`)
        return
    }
    let taxes = totalPrice * 0.2

    console.log(`Congratulations you've just bought a new computer!`)
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`)
    console.log(`Taxes: ${taxes.toFixed(2)}$`)
    console.log(`-----------`)
    if (type == "special") {
        console.log(`Total price: ${((taxes + totalPrice) * 0.9).toFixed(2)}$`)
    } else {
        console.log(`Total price: ${(taxes + totalPrice).toFixed(2)}$`)
    }
}
// store(([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30',
//     'regular'
// ]))
store(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ]))