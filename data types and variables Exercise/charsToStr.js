function chars(a, b, c) {

    let result = a + b + c
    console.log(`Town ${a} has population of ${b} and area ${c} square km.`)
}
chars('Sofia', '1286383', '492')

function metersToKm(meters) {

    let km = meters / 1000
    console.log(km.toFixed(2))
}
metersToKm(1852)

function pounds(value) {

    let dollars = value * 1.31
    console.log(dollars.toFixed(3))
}
pounds(80)

function reversedChars(a, b, c) {

    console.log(c, b, a)


}
reversedChars('A',

    'B',

    'C')