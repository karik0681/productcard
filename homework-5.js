// Показывает погоду в указанном городе.
function showWeather(city, temperature) {
    console.log(`Погода в ${city} составляет ${temperature}°C`);
}
showWeather('Москва', 20);

// Скорость света в вакууме
const speedOfLight = 299792458;
function checkSpeedOfLight(speed) {
    if (speed === speedOfLight) {
        console.log('Это правильная скорость света в вакууме.');
    } else if (speed < speedOfLight) {
        console.log('Это слишком низкая скорость света в вакууме.');
    } else {
        console.log('Это неправильная скорость света в вакууме.');
    }
}
checkSpeedOfLight(300000000);
checkSpeedOfLight(299792458);
checkSpeedOfLight(250000000);

// Бюджет на покупку техники
const product  = 'ноутбук';
const deviceCost = 1200;
function canPurchaseDevice(budget) {

    if (budget >= deviceCost) {
        console.log(`Ваш ${product} куплен.  Спасибо за покупку!`);
    } else {
        const difference = deviceCost - budget;
        console.log(`Не хватает ${difference} долларов.`);

    }
}
canPurchaseDevice(800);
canPurchaseDevice(1200);