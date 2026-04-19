const subscribeForm = document.querySelector('.subscribe-form');
subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(subscribeForm);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});


const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const form = document.querySelector('.registration-form');


openBtn.addEventListener('click', () => {
  overlay.classList.add('overlay-showed');
  modal.classList.add('modal-showed');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('overlay-showed');
  modal.classList.remove('modal-showed');
});

let user;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const password = form.elements.password.value;
  const passwordConfirm = form.elements.passwordConfirm.value;

  if (!form.checkValidity()) {
    alert('Пожалуйста, заполните все поля корректно!');
    return;
  }

  if (password !== passwordConfirm) {
    alert('Пароли не совпадают!');
    return;
  }

  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries());
  delete userData.passwordConfirm;
  userData.createdOn = new Date();
  user = userData;

  console.log(user);

  modal.classList.remove('modal-showed');
  overlay.classList.remove('overlay-showed');
});
