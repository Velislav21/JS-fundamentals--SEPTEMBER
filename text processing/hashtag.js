function hashtag(input){

    let specialWords = [];

    let words = input.split(' ');
    for (let word of words){

        let length = word.length
        let isValid = false;

        for (let char of word){
            if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57 ){
                isValid = false;
                break;
            } else {
                isValid = true
            }
        }
        
        if (word[0] == "#" && length > 1 && isValid){
            specialWords.push(word)
        }
    }

    for (let word of specialWords){

        let chars = word.split('')
        let firstChar = chars.shift()

        console.log(chars.join(''))
    }
}
hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')