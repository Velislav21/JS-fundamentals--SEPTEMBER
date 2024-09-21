function odd(input){

    let oddOccurences = {};
    let elementsObj = {}
    let tokens = input.toLowerCase().split(" ")
    console.log(tokens)

    for (let token of tokens){

        if (token in elementsObj){
            elementsObj[token]++;
        }else {
            elementsObj[token] = 1;
        } 
    }
    let entries = Object.entries(elementsObj)

    for (let [key, value] of entries){
        
        if (value % 2 !== 0){
            oddOccurences[key] = value
        }
    }
    let keys = Object.keys(oddOccurences).sort((b, a) => a.localeCompare(b))
    console.log(keys.join(" "))
    // for (let entry of oddEntries){
    //     console.log(entry)
    // }
    
}
odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#') 