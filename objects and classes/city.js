function city(input){

    for (let key of Object.keys(input)){
        // console.log(`${key} -> ${input[key]} `)
        // console.log(input[key])
        console.log(Object.keys(input))
    }
}
city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })