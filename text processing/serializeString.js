function serialization(input){

    let [text] = input

    let serialization = {}

    for (let char of text){
        console.log(char, text.findIndex())
        if (!serialization.hasOwnProperty('char')){            
            serialization[char] = char.indexOf(text)
        }else {
            // if (char == serialization[char]){
            //     serialization[char] 
            // }
        }
    }
    // console.log(serialization)
}
serialization(["abababa"])