// Navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if (window.pageYOffset > fixednav) {
        header.classList.add('fixed-nav');
    } else{
        header.classList.remove('fixed-nav')
    }
}

// Hamburger
const Hamburger = document.querySelector('#Hamburger');
const navMenu = document.querySelector('#nav-menu');

Hamburger.addEventListener('click', function (){
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

});