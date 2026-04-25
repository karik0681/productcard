import Drink from './Drink.js';

class Lemonade extends Drink {
    constructor(name, size, price, fruitType) {
        super(name, size, price);
        this.fruitType = fruitType;
        this.setTemperature(5);

    }

    getInfo() {
        super.getInfo();
        console.log(`Фрукт: ${this.fruitType}`);
    }
}

export default Lemonade;
