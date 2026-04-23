// homework-9.js
import { Modal } from './Modal.js';
import { Form } from './Form.js';

const modal = new Modal('modal');
const form = new Form('registration-form');
const subscribeForm = new Form('subscribe-form');

// открытие
const openBtn = document.getElementById('openBtn');
openBtn.addEventListener('click', () => {
    modal.open();
});

// подписка
subscribeForm.form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(subscribeForm.getValues());
});

// регистрация
let user;
form.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.isValid()) {
        alert('Пожалуйста, заполните все поля корректно!');
        return;
    }

    const data = form.getValues();

    if (data.password !== data.passwordConfirm) {
        alert('Пароли не совпадают!');
        return;
    }

    delete data.passwordConfirm;
    data.createdOn = new Date();
    user = data;

    console.log(user);
    modal.close();
    form.reset();
});