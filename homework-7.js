import {usersComments} from "./comments.js";

// массив чисел от 1 до 10 и отфильтровать только числа начиная с 5 и выше

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);
console.log(filteredNumbers);

// массив строк с названиями фильмов, книг, кухонные приборы, мебель затем проверить есть ли в массиве какая то определенная сущность

const items = ['Война и мир', 'Джентельмены', 'KitchenAid Mixer', 'Sofa'];
const containsItem = items.find(item => item === 'KitchenAid Mixer');
console.log(containsItem);

// Функция где арфументом будет принимать массив и изменять его порядок на обратный

function reverseArray(arr) {
    return arr.reverse();
}
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);

// Вывести в консоль все комментарии от пользователей, у которых имя заканчивается на ".com"

const filteredComments = usersComments.filter(comment => comment.email.endsWith(".com"));
console.log(filteredComments);

// Перебрать массив чтобы пользователи с id меньше или равно 5 имели postId: 2, а пользователи с id больше 5 имели postId: 1

usersComments.forEach(comment => {
    if (comment.id <= 5) {
        comment.postId = 2;
    } else {
        comment.postId = 1;
    }
});

// Перебрать массив только по id и name
usersComments.forEach(comment => {
    console.log(`ID: ${comment.id}, Name: ${comment.name}`);
});     

// перебрать массив и добавить каждому объекту новое свойство isInvalid и проверить если длина body меньше 180 символов то isInvalid будет true, иначе false
usersComments.forEach(comment => {
    comment.isInvalid = comment.body.length < 180;
});
console.log(usersComments); 


// С помощью метода reduce вывести массив email и тоже самое с методом map

const emailsWithReduce = usersComments.reduce((emails, comment) => {
    emails.push(comment.email);
    return emails;
}, []);
console.log(emailsWithReduce);

const emailsWithMap = usersComments.map(comment => comment.email);
console.log(emailsWithMap); 

// 12 - Перебрать массив с задания №11, привести его к строке. //

const emailsAsString = emails.toString();
const emailsString  = emails.join();

console.log(emailsAsString)
console.log(emailsString)