
/* burger menu */

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

/*slider */

const slider = document.querySelector('.slider');

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            // slide.style.display = 'block';

            slide.style.visibility = 'visible';
        } else {
            //slide.style.display = 'none';
            slide.style.visibility = 'hidden';
        }
    });
}

updateSlider();