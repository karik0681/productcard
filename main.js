import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './products.js';
import Truck from './Truck.js';
import Sedan from './Sedan.js';
import Cabriolet from './Cabriolet.js';



const sedan1 = new Sedan('BMW', 120, 4, 500);
const cab1 = new Cabriolet('Mercedes', 150, 2, false);
const truck1 = new Truck('Volvo', 90, 20);

sedan1.drive();
cab1.toggleRoof();
truck1.loadCargo();

// Покраска всех карточек

const productCards = document.querySelectorAll('.card-container')
const cnangeColorAllCardButton = document.querySelector('#change-color-all-card')
const greenColorHash = '#00ff00'
const yellowColorHash = '#fffb00ff'

cnangeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


/// Покраска первой карточки ///

const firstProductCard = document.querySelector('.card-container')
const cnangeColorFirstCardButton = document.querySelector('#change-color-first-card')

cnangeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = yellowColorHash
})

/// Открыть google ///

const openGoogleButton = document.querySelector('#open-google')

openGoogleButton.addEventListener('click', openGoogle)
function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?')

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return
  }
}

/// Вывести сообщение в консоль лог ///

const outputConsoleButton = document.querySelector('#output-console-log')

outputConsoleButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))
function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

/// Смена цвета кнопки при нажатии ///

const changeColorButton = document.querySelector('#change-color-button')

changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('bg-green')
  changeColorButton.classList.toggle('bg-yellow')
})

// Наведение на заголовок //

const pageTitle = document.querySelector('.page-title')
pageTitle.addEventListener('mouseover', () => {
  console.log(pageTitle.textContent)
})