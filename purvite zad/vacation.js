function vacation(peopleCount, typeOfGroup, dayOfWeek) {

    let price = 0

    switch (dayOfWeek) {
        case "Friday":
            switch (typeOfGroup) {
                case "Students": price = peopleCount * 8.45; break;
                case "Business": price = peopleCount * 10.90; break;
                case "Regular": price = peopleCount * 15; break;
            }
            break;
        case "Saturday":
            switch (typeOfGroup) {
                case "Students": price = peopleCount * 9.80; break;
                case "Business": price = peopleCount * 15.60; break;
                case "Regular": price = peopleCount * 20; break;
            }
            break;
        case "Sunday":
            switch (typeOfGroup) {
                case "Students": price = peopleCount * 10.46; break;
                case "Business": price = peopleCount * 16; break;
                case "Regular": price = peopleCount * 22.50; break;
            }
            break;
    }
    if (typeOfGroup === "Students" && peopleCount >= 30){
        price *= 0.85
    } else if (typeOfGroup === "Business" && peopleCount >= 100){
        price *= 0.90
    } else if (typeOfGroup === "Regular" && peopleCount >= 10 && peopleCount <= 20){
        price *= 0.95
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}
vacation(40,

    "Regular",
    
    "Saturday")