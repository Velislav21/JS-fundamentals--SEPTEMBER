function storage(input){

    let map = new Map()
    
    for (let info of input){

        let tokens = info.split(' ');
        let product = tokens[0];
        let qty = Number(tokens[1]);

        if (!map.has(product)){
            map.set(product, qty)
        }else {
            let currQty = map.get(product);
            let newQty = currQty + qty
            map.set(product, newQty)
        }
    }
    for (let kvp of map){
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}
storage(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'])