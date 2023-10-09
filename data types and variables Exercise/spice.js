function spice(startingYield){

    let isProfitable = true;
    let consumation = 0;
    let days = 0
    let spiceGathered = 0;

    while (isProfitable){

        spiceGathered += startingYield;
        days++;
        startingYield -= 10;
        consumation += 26;

        if (startingYield >= 100){
            continue;
        }else {
            consumation += 26;
            isProfitable = false;
        }

        spiceGathered -= consumation
        break;
    }
    console.log(days)
    console.log(spiceGathered)

}
spice(100)