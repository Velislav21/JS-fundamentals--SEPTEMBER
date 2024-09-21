function mirrorWords([input]){

    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;

    let match = input.match(pattern)
    let pairs = 0;
    let mirrorWords = 0;
    let result = []

    if (match !== null){
        for (let element of match){
            pairs++;
            if (element.includes("#")){
                element = element.split('#')
            }else {
                element = element.split('@')
            }
            let firstWord = element[1];
            let secondWord = element[3];
            let secondWordReversed = secondWord.split('').reverse().join('');
    
            if (firstWord == secondWordReversed){
                mirrorWords++;
                result.push([`${firstWord} <=> ${secondWord}`])
            }
        }
    }
    if (pairs > 0){
        console.log(`${pairs} word pairs found!`)

    }else {
        console.log(`No word pairs found!`)
    }
    
    if (mirrorWords > 0){
        console.log(`The mirror words are:`) 
        console.log(result.join(', '))
    }else {
        console.log(`No mirror words!`)
    }
}
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])