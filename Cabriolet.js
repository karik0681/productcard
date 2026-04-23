import Car from './Car.js';

export default class Cabriolet extends Car {
    constructor(brand, speed, doors, isRoofOpen) {
        super(brand, speed, doors);
        this.isRoofOpen = isRoofOpen;
    }

    toggleRoof() {
        console.log(`${this.brand} крыша ${this.isRoofOpen ? 'открыта' : 'закрыта'}`);
    }
}