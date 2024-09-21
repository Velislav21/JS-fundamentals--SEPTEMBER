function occ(sentence, searchedWord){

    let counter = 0;
    let words = sentence.split(' ')
    for (let word of words){
        if (word == searchedWord){
            counter++
        }
    }
    console.log(counter)
}
occ('This is a word and it also is a sentence',

'is')