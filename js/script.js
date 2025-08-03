"use strict"

const body = document.documentElement;

const menu = document.querySelector('.menu');
const actions = document.querySelector('.actions-header');

const loginBtn = document.getElementById('loginButton');
const joinBtn = document.getElementById('joinButton');
const burgerBtn = actions.querySelector('.icon-menu'); // <-- важливо! Локально в actions

function isMobile() {
    return window.innerWidth <= 767;
}

burgerBtn.addEventListener('click', () => {
    body.classList.toggle('open-menu');

    const open = body.classList.contains('open-menu');

    if (open && isMobile()) {
        // Переміщуємо кнопки в .menu
        if (actions.contains(loginBtn)) actions.removeChild(loginBtn);
        if (actions.contains(joinBtn)) actions.removeChild(joinBtn);

        loginBtn.classList.add('menu__button');
        joinBtn.classList.add('menu__button');

        menu.appendChild(loginBtn);
        menu.appendChild(joinBtn);
    } else {
        // Повертаємо кнопки назад у .actions-header
        if (menu.contains(loginBtn)) menu.removeChild(loginBtn);
        if (menu.contains(joinBtn)) menu.removeChild(joinBtn);

        loginBtn.classList.remove('menu__button');
        joinBtn.classList.remove('menu__button');

        // Вставляємо кнопки перед бургером
        actions.insertBefore(joinBtn, burgerBtn);
        actions.insertBefore(loginBtn, burgerBtn);
    }
});