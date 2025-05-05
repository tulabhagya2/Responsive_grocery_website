//swiper
document.addEventListener('DOMContentLoaded', function(){
var swiper = new Swiper(".home",{
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
menu.classList.toggle('bx-x');
menu.classList.toggle('active');
}
window.onscroll = () =>
{
    menu.classList.remove('bx-x');
    menu.classList.remove('active'); 
}




