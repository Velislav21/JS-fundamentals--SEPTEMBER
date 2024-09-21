function santa(input) {

    let value = Number(input.shift());
    let childInfo = input.shift()
    let decryptedInput = []

    let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]+!(?<behavior>[GN])!/

    while (childInfo !== "end") {

        let chars = childInfo.split('')
        let decryptedChildInfo = ''
        for (let char of chars) {
            let asciiValue = char.charCodeAt() - value
            decryptedChildInfo += String.fromCharCode(asciiValue)

        }
        decryptedInput.push(decryptedChildInfo)
        childInfo = input.shift()
    }
    for (let child of decryptedInput) {
        let match = pattern.exec(child)
        if (match !== null) {

            let { name, behavior } = match.groups
            if (behavior == "G") {
                console.log(name)
            }
        }

    }
}
santa(['3',

    "'N}eideidmk$'(mnyenmCNlpamnin$J$'",

    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',

    'ppqmkkkmnolmnnCEhq/vkievk$Q$',

    'yyegiivoguCYdohqwlqh/kguimhk$J$',

    'end'])