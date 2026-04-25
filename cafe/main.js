import Cafe from './Cafe.js';
import Coffee from './Coffee.js';
import Tea from './Tea.js';
import Lemonade from './Lemonade.js';



const cafe = new Cafe("Мой Кафе", "Москва")
const coffee = new Coffee("Эспрессо", "Маленький", 150, "Арабика", "Коровье молоко");
const tea = new Tea('Зелёный чай', 'Средний', 100, 'Зелёный');
const lemonade = new Lemonade('Лимонад', 'Большой', 120, 'Лимон');

cafe.getCafeInfo();

cafe.orderDrink(tea);
cafe.orderDrink(lemonade);
cafe.orderDrink(coffee);

coffee.getInfo();
tea.getInfo();
lemonade.getInfo();
