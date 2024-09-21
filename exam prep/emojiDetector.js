function emoji([input]){

    let digitPattern = /\d/g;
    let digits = input.match(digitPattern);

    let treshold = 1;
    for (let digit of digits){
        digit = Number(digit)
        treshold *= digit
    }
    
    let emojiPattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g
    let emojis = input.matchAll(emojiPattern);

    let coolEmojis = []
    let emojiCount = 0;
    for (let emoji of emojis){
        let emojiName = emoji.groups.emoji;
        let charSum = 0
        emojiCount++
        for (let char of emojiName){
            let value = char.charCodeAt(char);
            charSum += value;
        }
        if (charSum > treshold){
            coolEmojis.push(emoji[0]);
        }
    }
    console.log(`Cool threshold: ${treshold}`)
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`)

    coolEmojis.forEach(emoji => console.log(emoji))
}
emoji((["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]))