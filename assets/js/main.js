// burger
let burger_btn = document.querySelector('.burger_btn');
let menu_close = document.querySelector('.menu_close');
let menu_bg = document.querySelector('.menu_bg');
let menu = document.querySelector('.menu');

burger_btn.addEventListener('click', () => {
    menu_bg.classList.add('active');
    menu.classList.add('active');
})

menu_close.addEventListener('click', () => {
    menu_bg.classList.remove('active');
    menu.classList.remove('active');
})

menu_bg.addEventListener('click', () => {
    menu_bg.classList.remove('active');
    menu.classList.remove('active');
})
// burger