function swim(input){

    let championshipDays = Number(input.shift());

    let pointsToCover = Number(input.shift());

    let swimmersCount = Number(input.shift());

    let hotelRoomPricePerPerson = Number(input.shift());
    let participationFeePerSwimmer = Number(input.shift());

    let hotelPrice = (swimmersCount * hotelRoomPricePerPerson) * championshipDays;
    let participationPrice = participationFeePerSwimmer * swimmersCount;

    let totalPrice = hotelPrice + participationPrice;

    let totalPointsGained = 0;
    let pointsPerDay = []
    for (let points of input){
        pointsPerDay.push(Number(points))
    }

    for (let i = 0; i < championshipDays; i++){

        let dailyPoints = Number(pointsPerDay[i])

        if (i == 0){
            totalPointsGained += dailyPoints;
        }else {
            totalPointsGained += dailyPoints
            
            let bonusPoints = pointsPerDay[i - 1] * 0.05;
            totalPointsGained += bonusPoints
        }
    }
    if (totalPointsGained >= pointsToCover){
        console.log(`Money left to pay: ${(totalPrice *= 0.75).toFixed(2)} BGN.`)
        console.log(`The championship was successful!`)
    }else {
        console.log(`Money left to pay: ${(totalPrice *= 0.90).toFixed(2)} BGN.`)
        console.log(`The championship was not successful.`)
    }
}
swim((["3",
"400",
"5",
"70.6",
"15.0",
"100.6",
"300.59",
"250.9"]))
