const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".menu__item");

let navOpen = false;

navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open");
        navMenu.classList.remove("menu__item--open"); 

        navOpen = false;
    } else {
        navBtn.classList.add("nav__btn--open");
        navMenu.classList.add("menu__item--open");  
        navOpen = true;
    }
});
