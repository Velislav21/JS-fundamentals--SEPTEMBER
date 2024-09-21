function reception(input){

    let employee1 = Number(input.shift())
    let employee2 = Number(input.shift())
    let employee3 = Number(input.shift())
    let studentsCount = Number(input)

    let peopleServicedPerHour = employee1 + employee2 + employee3
    let timeNeeded = studentsCount / peopleServicedPerHour
    let hours = 0;
    while (studentsCount >= 0){
        studentsCount -= peopleServicedPerHour
        hours++
        if (hours % 4 == 0){
            hours++
        }
        
    }
    console.log(`Time needed: ${Math.ceil(timeNeeded)}h.`)
}
reception(['1','2','3','45'])