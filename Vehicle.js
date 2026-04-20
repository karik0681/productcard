// Vehicle.js
class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    drive() {
        console.log(`${this.brand} едет со скоростью ${this.speed} км/ч`);
    }
}

export { Vehicle };