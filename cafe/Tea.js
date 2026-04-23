import Drink from './Drink.js';

class Tea extends Drink {
    constructor(name, size, price, teaType) {
        super(name, size, price);
        this.teaType = teaType;
    }

    getInfo() {
        super.getInfo();
        console.log(`Тип чая: ${this.teaType}`);
    }

}

export default Tea;
