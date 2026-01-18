// Показывает температуру в указанном городе.
function showTemperature(city, temperature) {
    console.log(`Температура в ${city} составляет ${temperature}°C`);
}
showTemperature('МОСКВА:', 20);

// Скорость света
const speedOfLight = 299792458;
function checkSpeedOfLight(speed) {
    if (speed === speedOfLight) {
        console.log('Скорость света.');
    } else if (speed < speedOfLight) {
        console.log('Субсветовая скорость.');
    } else {
        console.log('Сверхсветовая скорость.');
    }
}
checkSpeedOfLight(300000000);
checkSpeedOfLight(299792458);
checkSpeedOfLight(250000000);

// Бюджет на покупку техники
const product  = 'ноутбук';
const devicePrice = 1200;
function PurchaseDevice(budget) {

    if (budget >= devicePrice) {
        console.log(`Ваш ${product} куплен.  Спасибо за покупку!`);
    } else{
        const difference = devicePrice - budget;
        console.log(`Вам не хватает ${difference} долларов.`);

    }
}
PurchaseDevice(800);
PurchaseDevice(1200);


// Длина строки
const result = length('Hello, world!');
console.log(result); // Выведет: 13




// Переменные с информацией о пользователе
const userName = 'Алексей';
const userAge = 30;
const userCity = 'Москва';