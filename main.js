const menuButton = document.querySelector(".nav__open_burger");
const menu = document.querySelector(".nav__open_menu");
const menuCloseButton = document.querySelector(".menu__close");

menuButton.addEventListener('click', ()=>{
    menu.classList.add('is-active');
    console.log('hello');
   // menuCloseButton.classList.add('is-active');
});

// menuButton.addEventListener('click', ()=>{
//     menu.classList.remove('is-active');
//     console.log('by');
//     //menuCloseButton.classList.remove('is-active');
// });