function pirates(input) {

    let line = input.shift();
    let cities = {};

    while (line !== "Sail") {
        let [cityName, population, gold] = line.split('||')

        population = Number(population);
        gold = Number(gold)
        if (cityName in cities){
            cities[cityName].population += population;
            cities[cityName].gold += gold;
        }else {
            cities[cityName] = {population, gold}
        }
        line = input.shift()
    }

    line = input.shift()
    while (line != "End"){
        let tokens = line.split('=>');
        let event = tokens.shift();

        if (event == "Plunder"){
            
            let [townName, peopleCount, gold] = tokens
            peopleCount = Number(peopleCount);
            gold = Number(gold);
            console.log(`${townName} plundered! ${gold} gold stolen, ${peopleCount} citizens killed.`)

            cities[townName].population -= peopleCount;
            cities[townName].gold -= gold;

            if (cities[townName].population <= 0 || cities[townName].gold <= 0){
                console.log(`${townName} has been wiped off the map!`)
                delete cities[townName]
                line = input.shift();
                continue;
            }
        }else {

            let [townName, gold] = tokens
            gold = Number(gold);

            if (gold < 0){
                console.log(`Gold added cannot be a negative number!`)
            }else {
                cities[townName].gold += gold
                console.log(`${gold} gold added to the city treasury. ${townName} now has ${cities[townName].gold} gold.`)
            }
        }
        line = input.shift()
    }
    let entries = Object.entries(cities)
    if (entries.length > 0){
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        for (let city in cities){
            console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`)
        }
    }else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}

pirates((["Nassau||95000||1000",

    "San Juan||930000||1250",

    "Campeche||270000||690",

    "Port Royal||320000||1000",

    "Port Royal||100000||2000",

    "Sail",

    "Prosper=>Port Royal=>-200",

    "Plunder=>Nassau=>94000=>750",

    "Plunder=>Nassau=>1000=>150",

    "Plunder=>Campeche=>150000=>690",

    "End"]))