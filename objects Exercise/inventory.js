function inventory(input) {

    let arr = []
    for (let tokens of input) {

        let object = {}

        let token = tokens.split(' / ')
        let name = token[0];
        let level = Number(token[1]);
        let items = token[2]

        object.name = name;
        object.level = level;
        object.items = items
        arr.push(object)
    }
    let sortedArr = arr.sort((a, b) => a.level - b.level)
    for (let arr of sortedArr) {
        console.log(`Hero: ${arr.name} \nlevel => ${arr.level} \nitems => ${arr.items}`)
        // console.log(`Hero: ${arr.name}`)
        // console.log(`level => ${arr.level}`)
        // console.log(`items => ${arr.items}`)
    }
}
inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])