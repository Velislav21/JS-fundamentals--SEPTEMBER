function reveal(words, sentence){

    let separatedWords = words.split(', ')
    
    for (let word of separatedWords){

        let template = '*'.repeat(word.length);

        if (sentence.includes(template)){
            sentence = sentence.replace(template, word)
        }
    }

    console.log(sentence)
}
reveal('great, learning',

'softuni is ***** place for ******** new programming languages')