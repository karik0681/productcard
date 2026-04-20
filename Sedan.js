// Sedan.js
import Car from './Car.js';
export default class Sedan extends Car {
    constructor(brand, speed, doors, trunkSize) {
        super(brand, speed, doors);
        this.trunkSize = trunkSize;
    }
}