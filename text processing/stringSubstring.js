function match(word, text){

    let lowerCaseWord = word.toLowerCase()
    let lowerCasetext = text.toLowerCase()

    let words = lowerCasetext.split(' ')

    if (words.includes(lowerCaseWord)){
        console.log(lowerCaseWord)
    }else {
        console.log(`${lowerCaseWord} not found!`)
    }


}

match('python',

'JavaScript is the best programming language')