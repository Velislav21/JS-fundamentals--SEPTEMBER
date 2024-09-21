function barCode(input) {

    let barCodesCount = input.shift()

    let pattern = /@(#{1,})(?<item>[A-Z][a-zA-Z\d]{4,}[A-Z])@(#{1,})/g
    let productGroup = ''
    for (let barCode of input) {
        let match = barCode.match(pattern)

        if (match == null) {
            console.log('Invalid barcode')
        } else {
            let matchAsStr = '' + match
            for (let char of matchAsStr) {
                if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
                    productGroup += char
                }
            }
            if (productGroup == '') {
                productGroup = '00'
            }
            console.log(`Product group: ${productGroup}`)
            productGroup = ''
        }
    }
}
barCode(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])