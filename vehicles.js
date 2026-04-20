class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    drive() {
        console.log(`${this.brand} едет со скоростью ${this.speed} км/ч`);
    }
}

class Car extends Vehicle {
    constructor(brand, speed, doors) {
        super(brand, speed);
        this.doors = doors;
    }
}

class Truck extends Vehicle {
    constructor(brand, speed, payload) {
        super(brand, speed);
        this.payload = payload;
    }
    loadCargo() {
        console.log(`${this.brand} загружен на  ${this.payload} тонн`);
    }
}

class Sedan extends Car {
    constructor(brand, speed, doors, trunkSize) {
        super(brand, speed, doors);
        this.trunkSize = trunkSize;
    }
}

class Cabriolet extends Car {
    constructor(brand, speed, doors, isRoofOpen) {
        super(brand, speed, doors);
        this.isRoofOpen = isRoofOpen;
    }

    toggleRoof() {
        console.log(`${this.brand} крыша ${this.isRoofOpen ? 'открыта' : 'закрыта'}`);
    }
}

export { Vehicle, Car, Truck, Sedan, Cabriolet }