function convert2(firstName, lastName, hairColor){

    let object = {}
    object.name = firstName;
    object.lastName = lastName;
    object.hairColor = hairColor;
    
    let jsonString = JSON.stringify(object)
    console.log(jsonString)
}
convert2('George', 'Jones',

'Brown')