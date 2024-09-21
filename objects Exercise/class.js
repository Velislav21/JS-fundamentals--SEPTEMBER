
class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.quality = this.parts.engine * this.parts.power
        this.fuel = fuel;
    }
    drive(fuelLoss) {
        this.fuel -= fuelLoss
    }
}

let parts = { engine: 15, power: 10 };

let vehicle = new Vehicle('audi', 'a3 1.8t', parts, 200);

vehicle.drive(100);

console.log(vehicle.fuel);

// console.log(vehicle.parts.quality);
console.log(vehicle.type, vehicle.model, vehicle.parts.quality, "hp, kur za bmw");