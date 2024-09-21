function tracking(input) {

    let occurrences = {};

    let searchedWords = input.shift().split(" ");

    for (let words of searchedWords) {
        occurrences[words] = 0;
    }

    for (let word of input) {
        if (word in occurrences) {
            occurrences[word]++
        }
    }
    let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1])

    for (let [key, value] of entries) {
        console.log(`${key} - ${value}`)
    }
}
tracking([

    'is the',

    'first', 'sentence', 'Here', 'is',

    'another', 'the', 'And', 'finally', 'the',

    'the', 'sentence'])