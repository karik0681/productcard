import Drink from './Drink.js';

class Coffee extends Drink {
    constructor(name, size, price, beanType, milkType) {
        super(name, size, price);
        this.beanType = beanType;
        this.milkType = milkType;
        this.setTemperature(90);

    }

    getInfo() {
        super.getInfo();
        console.log(`Зерна: ${this.beanType}, Тип молока: ${this.milkType}`);
    }

}

export default Coffee;
