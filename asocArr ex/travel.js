function organizeDestinations(destinations) {
    const townInfo = {};
  
    destinations.forEach((destination) => {
      let [country, town, cost] = destination.split(' > ');
      let travelCost = Number(cost);
  
      if (!(town in townInfo) || travelCost < townInfo[town].cost) {
        townInfo[town] = { country, cost: travelCost };
      }
    });
    console.log(townInfo)
}
organizeDestinations([

    "Bulgaria > Sofia > 500",
    
    "Bulgaria > Sopot > 800",
    
    "France > Paris > 2000",
    
    "Albania > Tirana > 1000",
    
    "Bulgaria > Sofia > 200"
    
    ])