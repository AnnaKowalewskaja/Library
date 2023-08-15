let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = document.querySelectorAll('.nav__list-link');
let body = document.querySelector('.body');

let openMenu = function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav--active');
    body.classList.toggle('noscroll');
}

burger.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu();
});

menuLinks.forEach((el) => {
    el.addEventListener('click', function () {
        burger.classList.remove('burger--active');
        menu.classList.remove('nav--active');
        body.classList.remove('noscroll');
    });
});

body.addEventListener('click', (e) => {
    let target = e.target;
    let targetBurger = target == burger;
    let targetMenu = target == menu || menu.contains(target);
    let activeMenu = menu.classList.contains('nav--active');

    if (!targetBurger && !targetMenu && activeMenu) {
        openMenu();
    }
});
