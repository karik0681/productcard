import { products } from './products.js';

// 1. Создаем объект описаний через reduce
const productDescriptions = products.reduce((acc, product) => {
  acc[product.name] = product.description;
  return acc;
}, {});

// 2. Функция получения числа карточек от пользователя с валидацией
function getCardCount() {
  const input = prompt('Сколько карточек нужно отобразить? (от 1 до 5)');
  const cardCount = parseInt(input);

  if (isNaN(cardCount) || cardCount < 1 || cardCount > 5) {
    alert('Пожалуйста, введите число от 1 до 5.');
    return getCardCount();
  }
  return cardCount;
}

// 3. Функция рендеринга карточек на странице
function renderCards(productsArray) {
  const container = document.querySelector('.product-cards-container');
  const template = document.getElementById('card-template').content;


  container.innerHTML = '';

  productsArray.forEach((product) => {

    const card = template.cloneNode(true);
    const img = card.querySelector('.js-product-img');
    if (img) img.src = product.image;

    const title = card.querySelector('.js-product-name');
    if (title) title.textContent = product.name;

    const desc = card.querySelector('.js-product-description');
    if (desc) desc.textContent = productDescriptions[product.name];

    const price = card.querySelector('.js-product-price');
    if (price) price.textContent = `${product.price} ₽`;
    
    container.appendChild(card);
  });
}


const count = getCardCount();

const productsToDisplay = products.slice(0, count);
renderCards(productsToDisplay);