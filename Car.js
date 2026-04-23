// Car.js
import { Vehicle } from './Vehicle.js';

export default class Car extends Vehicle {
    constructor(brand, speed, doors) {
        super(brand, speed);
        this.doors = doors;
    }
}