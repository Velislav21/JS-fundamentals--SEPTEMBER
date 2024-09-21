function value(input){

    let [text, charCase] = input;

    let sum = 0;

    for (let char of text){
        
        let code = char.charCodeAt()
        if (charCase == "LOWERCASE"){
            if (code >= 97 && code <= 122){
                sum += code
            }
        } else {
            if (code >= 65 && code <= 90){
                sum += code
            }
        }
    }
    console.log(`The total sum is: ${sum}`)
}
value(['AC/DC',

'UPPERCASE'])