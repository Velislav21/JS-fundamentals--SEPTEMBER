function rightPlace(word, char, match) {

    let result = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== "_") {
            result += word[i]
        } else {
            result += char
        }
    }
    let matchedOrNot = result == match ? "Matched" : "Not Matched"
    console.log(matchedOrNot)
}
rightPlace('Str_ng', 'I',

    'Strong')
console.log(`--------------------`)

rightPlace('Str_ng', 'i',

    'String')