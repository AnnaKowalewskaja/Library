
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
const slides = Array.from(slider.querySelectorAll('.about__slider_img'));
let slideMotion = 0;
let slideMotionStep = slides[0].offsetWidth + +window.getComputedStyle(slider).gap.substring(0, 2);

let carouselWrapper = document.querySelector('.about__slider_carousel');
let carousel = Array.from(carouselWrapper.querySelectorAll('.carousel__circle'));

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
carouselWrapper.addEventListener('click', event => {
    const status = event.target.getAttribute("status");
    if(status=="non-active"){
        showNextSlide();
    }
 
  })


function showPreviousSlide() {
    if (slideMotion - slideMotionStep <= 0) {
        prevButton.disabled;
    } else {
        slideMotion -= slideMotionStep;

        slides.forEach((slide, index) => {
            slide.style.right = slideMotion + 'px';
        });

        if (nextButton.disabled) {
            nextButton.disabled = !nextButton.disabled;
        };
    }
}

function showNextSlide() {
    if (slideMotion + slideMotionStep >= slideMotionStep * slides.length) {
        nextButton.disabled;
    } else {
        slideMotion += slideMotionStep;
        slides.forEach((slide, index) => {
            slide.style.right = slideMotion + 'px';
        })
        if (prevButton.disabled) {
            prevButton.disabled = !prevButton.disabled;
        };

    }

}
function changeSlideCarousel(index) {
carousel[index].classList.toggle('carousel__circle-active');
}




//work!!!!!
//let slideIndex = 0;
//const slideCount = slides.length;
// prevButton.addEventListener('click', showPreviousSlide);
// nextButton.addEventListener('click', showNextSlide);

// function showPreviousSlide() {
//     slideIndex = (slideIndex - 1 + slideCount) % slideCount;

//     updateSlider();
// }

// function showNextSlide() {
//     slideIndex = (slideIndex + 1) % slideCount;

//     updateSlider();
// }

// window.addEventListener('resize', function () {
//     widthWindow = window.innerWidth;
//     updateSlider();
// });

// function updateSlider() {
//     slides.forEach((slide, index) => {


//         if ((index === slideIndex) || (slidesShowStart[index] === index)) {
//             slide.classList.remove('about__slider_img-hide');
//         } else {
//             slide.classList.add('about__slider_img-hide');
//         }


//     });
// }

// updateSlider();