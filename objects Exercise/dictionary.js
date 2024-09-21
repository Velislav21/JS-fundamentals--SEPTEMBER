function dictionary(input) {

    let parsedInput = {}
    for (let json of input){

        let parsed = JSON.parse(json)
        let [term, description] = Object.entries(parsed)
        parsedInput[term] = description
        console.log(term)
    }
    // console.log(parsedInput)

    // console.log(Object.keys(parsedInput))
    
    // let sortedInput = parsedInput.sort((a, b) => a[0].localeCompare(b[0]))
    // console.log(sortedInput)
    // for (let object of parsedInput){
        
    // }
    // let keys = Object.keys(parsedInput)
    // console.log(keys)
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds(coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for afare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}', 
    '{"Tape":"A narrow strip of material, typically used to hol or fasten something."}',
    '{"Microphone":"An instrument  for converting sound waves int electrical energy variation which may then be amplified transmitted, or recorded."}'
])