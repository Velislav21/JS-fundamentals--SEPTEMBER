function addRemove (input){

    let newArr = [];
    let initialNumber = 1;

    for (let i = 0; i < input.length; i++){
        if (input[i] == "add"){

            newArr.push(initialNumber);
            initialNumber++;

        }else {
            newArr.pop();
            initialNumber++;
        }  
    }
    if (newArr.length == 0){
        console.log("Empty")
    }
    console.log(newArr.join(" "))
}
addRemove(['add', 'add', 'add', 'add'])
addRemove(['add', 'add', 'remove', 'add', 'add'])
addRemove(['remove', 'remove', 'remove'])