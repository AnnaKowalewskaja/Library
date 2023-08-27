
/* burger menu */

const BURGER = document.querySelector('.burger');
const MENU = document.querySelector('.nav');
const MENU_LINKS = document.querySelectorAll('.nav__list-link');
const BODY = document.querySelector('.body');


let openMenu = function () {
    BURGER.classList.toggle('burger--active');
    MENU.classList.toggle('nav--active');
    BODY.classList.toggle('noscroll');
}

BURGER.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu();
});

MENU_LINKS.forEach((el) => {
    el.addEventListener('click', function () {
        BURGER.classList.remove('burger--active');
        MENU.classList.remove('nav--active');
        BODY.classList.remove('noscroll');
    });
});

BODY.addEventListener('click', (e) => {
    let target = e.target;
    let targetBurger = target == BURGER;
    let targetMenu = target == MENU || MENU.contains(target);
    let activeMenu = MENU.classList.contains('nav--active');

    if (!targetBurger && !targetMenu && activeMenu) {
        openMenu();
    }
});

/*slider */

const SLIDER = document.querySelector('.slider');

const PREV_BTN = document.querySelector('.prev-button');
const NEXT_BTN = document.querySelector('.next-button');
let slides = Array.from(SLIDER.querySelectorAll('.about__slider_img'));
let slideMotion = 0;
//let slideMotionStep = slides[0].offsetWidth + +window.getComputedStyle(SLIDER).gap.substring(0, 2);
let slideMotionStep = 47;

const CAROUSEL_BTN1 = document.querySelector('#carousel_1');
const CAROUSEL_BTN2 = document.querySelector('#carousel_2');
const CAROUSEL_BTN3 = document.querySelector('#carousel_3');
let activeCarouselBtn = 1;


PREV_BTN.addEventListener('click', showPreviousSlide);
NEXT_BTN.addEventListener('click', showNextSlide);


CAROUSEL_BTN1.addEventListener('click', () => { showSlideNumber(1) });
CAROUSEL_BTN2.addEventListener('click', () => { showSlideNumber(2) });
CAROUSEL_BTN3.addEventListener('click', () => { showSlideNumber(3) });




function showPreviousSlide() {
    // console.log(window.getComputedStyle(SLIDER).width.substring(0, 2));
    if (slideMotion - slideMotionStep < 0) {
        PREV_BTN.disabled;
    } else {
        slideMotion -= slideMotionStep;

        slides.forEach((slide, index) => {
            slide.style.right = slideMotion + 'rem';
        });

        if (NEXT_BTN.disabled) {
            NEXT_BTN.disabled = !NEXT_BTN.disabled;
        };
    }
}

function showNextSlide() {
    if ((slideMotion + slideMotionStep >= slideMotionStep * slides.length) || (SLIDER.offsetWidth >= 1400 && slideMotion + slideMotionStep >= slideMotionStep * (slides.length - 2))) {
        NEXT_BTN.disabled;
    } else {
        slideMotion += slideMotionStep;
        slides.forEach((slide, index) => {
            slide.style.right = slideMotion + 'rem';
        })
        if (PREV_BTN.disabled) {
            PREV_BTN.disabled = !PREV_BTN.disabled;
        };

    }

}

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.right = slideMotion + 'rem';
    })
}
function toggleClass(id, className) {
    if (id == 1) {
        CAROUSEL_BTN1.classList.add(className);
        CAROUSEL_BTN2.classList.remove(className);
        CAROUSEL_BTN3.classList.remove(className);
    } else if (id == 2) {
        CAROUSEL_BTN1.classList.remove(className);
        CAROUSEL_BTN2.classList.add(className);
        CAROUSEL_BTN3.classList.remove(className);
    } else if (id == 3) {
        CAROUSEL_BTN1.classList.remove(className);
        CAROUSEL_BTN2.classList.remove(className);
        CAROUSEL_BTN3.classList.add(className);
    }

}

function showSlideNumber(id) {
    const ACTIVE_CLASS = 'carousel__circle-active';



    // console.log();
    switch (id) {
        case 1:
            slideMotion = 0;
            changeSlide();
            toggleClass(1, ACTIVE_CLASS);
            break;
        case 2:
            slideMotion = slideMotionStep;
            changeSlide();
            toggleClass(2, ACTIVE_CLASS);
            break;
        case 3:
            slideMotion = slideMotionStep * 2;
            changeSlide();
            toggleClass(3, ACTIVE_CLASS);
            break;
        default:
            console.log(`Error`);
    }

}




//work!!!!!
//let slideIndex = 0;
//const slideCount = slides.length;
// PREV_BTN.addEventListener('click', showPreviousSlide);
// NEXT_BTN.addEventListener('click', showNextSlide);

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


/* books */
const RADIO_WINTER = document.querySelector('#radio__winter');
const RADIO_SPRING = document.querySelector('#radio__spring');
const RADIO_SUMMER = document.querySelector('#radio__summer');
const RADIO_AUTUMN = document.querySelector('#radio__autumn');

const BOOKS_WINTER = Array.from(document.querySelectorAll('.winter'));
const BOOKS_SPRING = Array.from(document.querySelectorAll('.spring'));
const BOOKS_SUMMER = Array.from(document.querySelectorAll('.summer'));
const BOOKS_AUTUMN = Array.from(document.querySelectorAll('.autumn'));

// RADIO_WINTER.addEventListener('click', (e) => {
//     let display = window.getComputedStyle(BOOKS_WINTER[0]).display;
//     // console.log(window.getComputedStyle(BOOKS_WINTER[0]).display);

//     if (display == 'none') {
//         BOOKS_WINTER.forEach((el) => { fadeIn(el, 1000, "flex"); });
//     } else {
//         BOOKS_WINTER.forEach((el) => { fadeOut(el, 1000);});
//     }
// })

// RADIO_SPRING.addEventListener('click', (e) => {
//     let display = window.getComputedStyle(BOOKS_SPRING[0]).display;
//     if (display == 'none') {
//         BOOKS_SPRING.forEach((el) => { fadeIn(el, 1000, "flex"); });
//     } else {
//         BOOKS_SPRING.forEach((el) => { fadeOut(el, 1000); });
//     }
// })

const fadeIn = (el, timeout, display) => {
    const STYLE = el.style;
    STYLE.opacity = 0;
    STYLE.display = display || 'block';
    STYLE.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        STYLE.opacity = 1;
    }, 10);
}

const fadeOut = (el) => {
    const STYLE = el.style;
    setTimeout(() => {
        STYLE.opacity = 0;
    }, 10);
    STYLE.display = 'none';
}


const RADIOS = Array.from(document.querySelectorAll('input[type=radio][name="radio"]'));
RADIOS.forEach(radio => {
    radio.addEventListener('change', (e) => {
        const seasonOfChange = e.target.id.replace('radio__', '').toUpperCase();
        const nameOfChange = `BOOKS_${seasonOfChange}`;
        nameOfChange.forEach((el) => { fadeIn(el, 1000, "flex"); });
        
    });
  
});

