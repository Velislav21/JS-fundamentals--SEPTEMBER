function nfs(input) {

    let carsCount = Number(input.shift());

    let cars = {};

    for (let i = 0; i < carsCount; i++) {
        let carInfo = input.shift();
        let [carModel, mileage, fuel] = carInfo.split('|');

        let car = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }
        cars[carModel] = car;
    }
    let command = input.shift();
    while (command != "Stop") {
        let [action, ...arguments] = command.split(' : ');
        switch (action) {
            case "Drive": {
                let [carModel, distance, fuel] = arguments;

                if (cars[carModel].fuel > fuel) {
                    cars[carModel].mileage += Number(distance);
                    cars[carModel].fuel -= Number(fuel);
                    console.log(`${carModel} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    if (cars[carModel].mileage >= 100000) {
                        console.log(`Time to sell the ${carModel}!`)
                        delete cars[carModel]
                    }
                } else {
                    console.log(`Not enough fuel to make that ride`);
                }
            }
                break;
            case "Refuel": {
                let [carModel, fuel] = arguments;
                if (cars[carModel].fuel + Number(fuel) > 75) {
                    let refueled = cars[carModel].fuel - 75;
                    cars[carModel].fuel = 75;
                    console.log(`${carModel} refueled with ${Math.abs(refueled)} liters`)
                } else {
                    cars[carModel].fuel += Number(fuel);
                    console.log(`${carModel} refueled with ${fuel} liters`)
                }
            }
                break;
            case "Revert": {
                let [carModel, kilometers] = arguments;
                cars[carModel].mileage -= Number(kilometers);
                console.log(`${carModel} mileage decreased by ${kilometers} kilometers`)
                if (cars[carModel].mileage < 10000) {
                    cars[carModel].mileage = 10000
                }
            }
                break;
        }
        command = input.shift();
    }
    for (let car in cars) {
        let name = cars[car]
        console.log(`${car} -> Mileage: ${name.mileage} kms, Fuel in the tank: ${name.fuel} lt.`)
    }
}
nfs([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
)