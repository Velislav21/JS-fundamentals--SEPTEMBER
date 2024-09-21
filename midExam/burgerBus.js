function burgerBus(input){

    let townsNumber = Number(input.shift())
    let totalProfit = 0;
    for (let i = 1; i <= townsNumber; i++){

        let currentTownInfo = input.splice(0,3);

        let ownersProfit = currentTownInfo[1];
        let ownersExpenses = currentTownInfo[2];

        if (i % 5 == 0){
            ownersProfit *= 0.9;
        }else if (i % 3 == 0){
            ownersExpenses *= 1.5;
        }   
        let currentProfit = ownersProfit - ownersExpenses;
        
        totalProfit += currentProfit
        console.log(`In ${currentTownInfo[0]} Burger Bus earned ${currentProfit.toFixed(2)} leva.`)
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)

}
burgerBus(["5",

"Lille",

"2226.00",

"1200.60",

"Rennes",

"6320.60",

"5460.20",

"Reims",

"600.20",

"452.32",

"Bordeaux",

"6925.30",

"2650.40",

"Montpellier",

"680.50",

"290.20"])
