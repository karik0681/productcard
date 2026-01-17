// Показывает температуру в указанном городе.
function showTemperature(city, temperature) {
    console.log(`Температура в ${city} составляет ${temperature}°C`);
}
showTemperature('Москва', 20);

// Скорость света в вакууме
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
function canPurchaseDevice(budget) {

    if (budget >= devicePrice) {
        console.log(`Ваш ${product} куплен.  Спасибо за покупку!`);
    } else{
        const difference = devicePrice - budget;
        console.log(`Вам не хватает ${difference} долларов.`);

    }
}
canPurchaseDevice(800);
canPurchaseDevice(1200);


// Длина строки
const result = length('Hello, world!');
console.log(result); // Выведет: 13




// Переменные с информацией о пользователе
const userName = 'Алексей';
const userAge = 30;
const userCity = 'Москва';