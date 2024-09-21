function word(input){

    let map = new Map()

    for (let word of input ){
        let count = 1;

        if(!map.has(word)){
            map.set(word, count)
        }else {
            let currentCount = map.get(word)
            let newCount = currentCount + count
            map.set(word, newCount)
        }
    }
    let arrFromMap = Array.from(map); // returns array [key, value] from given map !
    console.log(arrFromMap)
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1])
    // for (let [key, value] of sorted){
    //     console.log(`${key} -> ${value} times`)
    // }

}
word(["dog", "bye", "city", "dog", "dad",

"boys", "ginger"])