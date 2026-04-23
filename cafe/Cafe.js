class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location; 
       }

    getCafeInfo() {
        console.log(`Кафе: ${this.name} расположено по адресу: ${this.location}`);
    }

   orderDrink(drink) {
        console.log(`Вы заказали: ${drink.name} в размере ${drink.size} по цене ${drink.price}`);
        drink.serve();
    }

}

export default Cafe;