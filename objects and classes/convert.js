function convert(input){

    let converted = JSON.parse(input)

    let entries = Object.entries(converted)
    for (let [key, value] of entries){
        console.log(`${key}: ${value}`)
    }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}')