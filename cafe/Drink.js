class Drink {
    #temperature;

    constructor(name, size, price) {

        if (new.target === Drink) {
            throw new Error("Нельзя создать экземпляр абстрактного класса Drink");
        }

        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = 0;
    }

    getInfo() {
        console.log(`Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price} Температура: ${this.getTemperature()}°C`);
    }

    getTemperature() {
        return this.#temperature;
    }

    setTemperature(temp) {
        this.#temperature = temp;
    }

    #prepare() {
        console.log(`Приготовление напитка ${this.name}...`);
    }

    serve() {
        this.#prepare();
        console.log(`Подача напитка ${this.name} при температуре ${this.getTemperature()}°C`);
    }

}

export default Drink;