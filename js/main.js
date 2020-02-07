let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.arrow'
    },
    loop: true,
    breakpoints: {
        540: {
            slidesPerView: 2,
        }
    }
});

let menuButton = document.querySelector('.menu-btn');
let menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
    menu.classList.toggle('header-active');
    menuButton.classList.toggle('menu-btn-active');
});


