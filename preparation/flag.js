function flag(input){

    let days = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());

    let totalPlunder = 0;
    for (let i = 1; i <= days; i++){

        totalPlunder += dailyPlunder;

        if (i % 3 == 0){
            totalPlunder += dailyPlunder / 2;
        }
        if (i % 5 == 0){
            totalPlunder -= totalPlunder * 0.3
        }

    }
    if (totalPlunder >= expectedPlunder){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    }else {
        let percentage = (totalPlunder / expectedPlunder) * 100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}
flag(["10",
"20",
"380"])