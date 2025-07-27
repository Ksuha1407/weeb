"use strict"

const burgerBtn = document.querySelector('.icon-menu');
const body = document.documentElement;

const menu = document.querySelector('.menu');
const actions = document.querySelector('.actions-header');

const loginBtn = document.getElementById('loginButton');
const joinBtn = document.getElementById('joinButton');

function isMobile() {
    return window.innerWidth <= 767;
}

burgerBtn.addEventListener('click', () => {
    body.classList.toggle('open-menu');

    if (body.classList.contains('open-menu') && isMobile()) {
        // Якщо кнопки ще в actions - видаляємо і додаємо в menu
        if (actions.contains(loginBtn)) actions.removeChild(loginBtn);
        if (actions.contains(joinBtn)) actions.removeChild(joinBtn);

        loginBtn.classList.add('menu__button');
        joinBtn.classList.add('menu__button');

        menu.appendChild(loginBtn);
        menu.appendChild(joinBtn);
    } else {
        // Якщо кнопки ще в menu - видаляємо і повертаємо в actions
        if (menu.contains(loginBtn)) menu.removeChild(loginBtn);
        if (menu.contains(joinBtn)) menu.removeChild(joinBtn);

        loginBtn.classList.remove('menu__button');
        joinBtn.classList.remove('menu__button');

        // Вставляємо кнопки перед бургером, щоб бургер був останній
        actions.insertBefore(loginBtn, burgerBtn);
        actions.insertBefore(joinBtn, burgerBtn);
    }
});