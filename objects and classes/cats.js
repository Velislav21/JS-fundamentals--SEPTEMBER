function cats(catsAsStrings) {

    class Cat {

        constructor(name, age) {

            this.name = name;
            this.age = age;
        }
        
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let cats = []

    for (let catAsString of catsAsStrings) {

        let [catName, catAge] = catAsString.split(' ')
        // let catName = tokens[0];
        // let catAge = Number(tokens[1]);

        let cat = new Cat(catName, catAge)
        cats.push(cat)
    }

    for (let cat of cats){
        cat.meow()
    }
}
cats(['Mellow 2', 'Tom 5'])