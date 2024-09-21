function repeatingChars(string){

    let noRepeats = '';
    let prevChar = '';

    for (let char of string){

        if (char !== prevChar ){
            noRepeats += char
            prevChar = char
        }
    }
    console.log(noRepeats)
}
repeatingChars('aaaaabbbbbcdddeeeedssaa')