function store(store, orderedProducts){

    let stock = {};

    for (let i = 0; i < store.length; i += 2){

        let product = store[i];
        let quantity = Number(store[i + 1]);
        stock[product] = quantity;
        
    }


    for (let i = 0; i < orderedProducts.length; i += 2){

        let product = orderedProducts[i];
        let quantity = Number(orderedProducts[i + 1]);

        if (product in stock){
            stock[product] += quantity
        }else {
            stock[product] = quantity
        }
    }
    let entries = Object.entries(stock);
    for (let entry of entries){
        console.log(`${entry[0]} -> ${entry[1]}`)
    }

}
store([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'   
    ],
    
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])