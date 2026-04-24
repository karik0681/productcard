import Drink from './Drink.js';

class Tea extends Drink {
    constructor(name, size, price, teaType) {
        super(name, size, price);
        this.teaType = teaType;
        this.setTemperature(80);

    }

    getInfo() {
        super.getInfo();
        console.log(`Тип чая: ${this.teaType}`);
    }

}

export default Tea;
