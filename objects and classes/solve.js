let person = {
    name: "Velislav", age: 19, eyeColor: "Brown"
}
person['height'] = 178
for (let key of Object.keys(person)) {
    console.log(`${key} --> ${person[key]}`);
    // console.log(Object.entries(person))
}

console.log(Object.entries(person))