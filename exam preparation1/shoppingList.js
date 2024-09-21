function shopping(input) {

    let shoppingList = input.shift().split('!');
    let finalCommand = input.pop()
    for (let command of input) {

        let tokens = command.split(' ')
        let commandType = tokens[0];
        let product = tokens[1];


        if (commandType == "Urgent") {

            if (!shoppingList.includes(product)) {
                shoppingList.unshift(product);
            }

        } else if (commandType == "Unnecessary") {

            if (shoppingList.includes(product)) {
                shoppingList.splice(shoppingList.indexOf(product), 1)
            }

        } else if (commandType == "Correct") {
            let secondProduct = tokens[2];
            let indexOfProduct = shoppingList.indexOf(product);

            if (shoppingList.includes(product)) {

                shoppingList[indexOfProduct] = secondProduct
            }

        } else if (commandType == "Rearrange") {
            if (shoppingList.includes(product)){
                shoppingList.splice(shoppingList.indexOf(product), 1)
                shoppingList.push(product)
            }
        }
    }
    console.log(shoppingList.join(', '))
}
shopping(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])

// shopping((["Milk!Pepper!Salt!Water!Banana",
//     "Urgent Salt",
//     "Unnecessary Grapes",
//     "Correct Pepper Onion",
//     "Rearrange Grapes",
//     "Correct Tomatoes Potatoes",
//     "Go Shopping!"])
// )