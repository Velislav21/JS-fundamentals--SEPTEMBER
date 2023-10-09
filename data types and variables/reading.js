function reading(pagesCount, pagesPerHour, daysCount){

    let timeRequiredInHours = pagesCount / pagesPerHour
    let hoursPerDay = timeRequiredInHours / daysCount
    console.log(hoursPerDay)

}
reading(212, 20 , 2)
console.log(`----------`)
reading(432,
 15 ,
 4)