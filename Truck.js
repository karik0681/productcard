import { Vehicle } from './Vehicle.js';

export default class Truck extends Vehicle {
    constructor(brand, speed, payload) {
        super(brand, speed);
        this.payload = payload;
    }
    loadCargo() {
        console.log(`${this.brand} загружен на ${this.payload} тонн`);
    }
}