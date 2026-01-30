// Создайте объект, содержащий информацию о себе: имя, фамилия, возраст, город, страна, email, род деятельности и компания.
// Выведите этот объект в консоль.

const myInfo = {
    firstName: 'Kairat',
    lastName: 'Ivanov',
    age: '30',
    city: 'Almaty',
    country: 'Kazakhstan',
    email: 'kairat.ivanov@example.com',
    work : 'Software Engineer',
    company: 'Tech Solutions'
};

console.log(myInfo);

//Содайте объект об автомобиле: марка, модель, год выпуска, цвет, пробег, владелец myInfo (объект созданный в предыдущем задании).

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    transmission: 'Automatic',
    color: 'White',
    mileage: 15000,
    owner: myInfo
};

console.log(car);

// функция из объекта car которая будет проверять есть ли в свойстве максимальная скорость если нет то добавлять его со значением 200 если есть то ничего не делать.
function checkAndAddMaxSpeed(carObj) {
    if (!carObj.hasOwnProperty('maxSpeed')) {
        carObj.maxSpeed = 200;
    }
}
checkAndAddMaxSpeed(car);
console.log(car);

// Функция с аргументом объект и второй аргумент свойство объекта затем нужно вывести ее значение в консоль.
function showProperty(obj, prop) {
    console.log(obj[prop]);
}
showProperty(car, 'brand');

// Массив который содержит название продуктов просто строки.
const products = ['Laptop', 'Smartphone', 'Tablet', 'Headphones', 'Smartwatch'];

// Массив состоящий из объектов где объект представляет книгу с такими свойствами как название, автор, год издания, жанр.Несколько книг. Затем добавить один фильм в конец списка.

const books = [
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        genre: 'Dystopian'
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960,
        genre: 'Fiction'
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        genre: 'Classic'
    }
];

books.push({
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genre: 'Science Fiction'
});

console.log(books);

// Массив жанра фантастика из несскольких книг затем объединить его с массивом books в один массив через ...оператор.
const sciFiBooks = [
    {
        title: 'Dune',
        author: 'Frank Herbert',
        year: 1965,
        genre: 'Science Fiction'
    },
    {
        title: 'Neuromancer',
        author: 'William Gibson',
        year: 1984,
        genre: 'Cyberpunk'
    }
];

const combinedBooks = [...sciFiBooks, ...books];
console.log(combinedBooks);

// Функция которая принимает массив из combinedBooks и добавляет новое свойство isRare со значением true если год издания книги после 2000 года и false если до.
function markRareBooks(bookArray) {
    return  bookArray.map(book => ({ ...book, isRare: book.year > 2000 }));
} 
console.log(markRareBooks(combinedBooks));