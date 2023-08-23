
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

const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.about__slider_img'));
let slideMotion = 0;
let slideMotionStep = slides[0].offsetWidth + +window.getComputedStyle(slider).gap.substring(0, 2);

const carouselBtn1 = document.querySelector('#carousel_1');
const carouselBtn2 = document.querySelector('#carousel_2');
const carouselBtn3 = document.querySelector('#carousel_3');
let activeCarouselBtn = 1;


prevBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);


carouselBtn1.addEventListener('click', () => { showSlideNumber(1) });
carouselBtn2.addEventListener('click', () => { showSlideNumber(2) });
carouselBtn3.addEventListener('click', () => { showSlideNumber(3) });




function showPreviousSlide() {
    if (slideMotion - slideMotionStep < 0) {
        prevBtn.disabled;
    } else {
        slideMotion -= slideMotionStep;

        slides.forEach((slide, index) => {
            slide.style.right = slideMotion + 'rem';
        });

        if (nextBtn.disabled) {
            nextBtn.disabled = !nextBtn.disabled;
        };
    }
}

function showNextSlide() {
    if ((slideMotion + slideMotionStep >= slideMotionStep * slides.length) || (slider.offsetWidth >= 1400 && slideMotion + slideMotionStep >= slideMotionStep * (slides.length - 2))) {
        nextBtn.disabled;
    } else {
        slideMotion += slideMotionStep;
        slides.forEach((slide, index) => {
            slide.style.right = slideMotion + 'rem';
        })
        if (prevBtn.disabled) {
            prevBtn.disabled = !prevBtn.disabled;
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
        carouselBtn1.classList.add(className);
        carouselBtn2.classList.remove(className);
        carouselBtn3.classList.remove(className);
    } else if (id == 2) {
        carouselBtn1.classList.remove(className);
        carouselBtn2.classList.add(className);
        carouselBtn3.classList.remove(className);
    } else if (id == 3) {
        carouselBtn1.classList.remove(className);
        carouselBtn2.classList.remove(className);
        carouselBtn3.classList.add(className);
    }

}

function showSlideNumber(id) {
    const activeClass = 'carousel__circle-active';
    switch (id) {
        case 1:
            slideMotion = 0;
            changeSlide();
            toggleClass(1, activeClass);
            break;
        case 2:
            slideMotion = slideMotionStep;
            changeSlide();
            toggleClass(2, activeClass);
            break;
        case 3:
            slideMotion = slideMotionStep * 2;
            changeSlide();
            toggleClass(3, activeClass);
            break;
        default:
            console.log(`Error`);
    }

}




//work!!!!!
//let slideIndex = 0;
//const slideCount = slides.length;
// prevBtn.addEventListener('click', showPreviousSlide);
// nextBtn.addEventListener('click', showNextSlide);

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
const radioWinter = document.querySelector('#radio__winter');
const radioSpring = document.querySelector('#radio__spring');
const radioSummer = document.querySelector('#radio__summer');
const radioAutumn = document.querySelector('#radio__autumn');

let activeSeason = radioWinter;
activeSeason.checked = true;

radioWinter.addEventListener('click', () => { showSeasonBooks("winter") });
radioSpring.addEventListener('click', () => { showSeasonBooks("spring") });
radioSummer.addEventListener('click', () => { showSeasonBooks("summer") });
radioAutumn.addEventListener('click', () => { showSeasonBooks("autumn") });


// activeSeason.checked = true;
// activeSeason = radioAutumn;
 activeSeason.checked = true;



function showSeasonBooks(season) {
    switch (season) {
        case "winter":

            break;
        case "spring":

            break;
        case "summer":

            break;
        case "autumn":

            break;
        default:
            console.log(`Error`);
    }

}

// function toggleSeason(id, className) {
//     if (id == 1) {
//         carouselBtn1.classList.add(className);
//         carouselBtn2.classList.remove(className);
//         carouselBtn3.classList.remove(className);
//     } else if (id == 2) {
//         carouselBtn1.classList.remove(className);
//         carouselBtn2.classList.add(className);
//         carouselBtn3.classList.remove(className);
//     } else if (id == 3) {
//         carouselBtn1.classList.remove(className);
//         carouselBtn2.classList.remove(className);
//         carouselBtn3.classList.add(className);
//     }

// }
