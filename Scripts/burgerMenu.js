<<<<<<< HEAD
const burgerButton = document.getElementsByClassName("burger__button__closed")[0];
const burgerMenu = document.getElementsByClassName("header__menu__closed")[0];
// let width = window.innerWidth;

// window.addEventListener('resize', () => {
//     width = window.innerWidth;
// })

// if (width >= 1000) {
//     burgerMenu.classList.add("header__menu__open");
// } 

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger__button__open');
    burgerMenu.classList.toggle('header__menu__open')
=======
const burgerButton = document.getElementsByClassName("burger__button__closed")[0];
const burgerMenu = document.getElementsByClassName("header__menu__closed")[0];
// let width = window.innerWidth;

// window.addEventListener('resize', () => {
//     width = window.innerWidth;
// })

// if (width >= 1000) {
//     burgerMenu.classList.add("header__menu__open");
// } 

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger__button__open');
    burgerMenu.classList.toggle('header__menu__open')
>>>>>>> 12ab5022b22e6a675443b913774412ece7ea029e
});