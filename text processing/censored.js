function censored(string, word){

    while(string.includes(word)){
       string = string.replace(word, "*".repeat(word.length))
    }
    console.log(string)
}
censored('A small sentence with some words',

'small')