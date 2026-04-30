const statusElement = document.getElementById('status');
const userlistElement = document.getElementById('user-list');
const fetchButton = document.getElementById('fetch-button');
const clearButton = document.getElementById('clear-button');

async function loadUsers() {

    try {

        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            renderUsers(users);
            return
        }
        statusElement.textContent = 'Данные загружаются...';

        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await fetch('users.json');
        const data = await response.json();

        localStorage.setItem('users', JSON.stringify(data.users));
        renderUsers(data.users);
    } catch (error) {
        statusElement.textContent = `Error: ${error.message}`;
        throw new Error('Failed to load users');

    }
}

function renderUsers(users) {
    statusElement.textContent = '';
    userlistElement.innerHTML = '';

    users.forEach(user => {
        const card = document.createElement('div');
        card.innerHTML = `
            <p>${user.name} ${user.surname}</p>
            <p>${user.email}</p>
            <p>${user.age}</p>
            <button data-id="${user.id}">Удалить</button>
        `;

        card.querySelector('button').addEventListener('click', () => {
            deleteUser(user.id);
        });
        userlistElement.appendChild(card);
    });
}

function deleteUser(id) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    renderUsers(updatedUsers);
}

function clearUsers() {
    localStorage.removeItem('users');
    userlistElement.innerHTML = '';
    statusElement.textContent = 'Данные очищены';
}

function fetchAllUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length > 0 && userlistElement.children.length > 0) {
        statusElement.textContent = 'Данные уже загружены';
        return;
    }
    loadUsers();
}

fetchButton.addEventListener('click', fetchAllUsers);
clearButton.addEventListener('click', clearUsers);
loadUsers();