const $HAMBURGER_MENU = document.querySelector('.js-hamburger')
const $NAVBAR_LIST = document.querySelector('.js-navbar-list')

$HAMBURGER_MENU.addEventListener('click', ()=>{
    $HAMBURGER_MENU.classList.toggle('navbar__hamburger--open')
    $NAVBAR_LIST.classList.toggle('navbar__list--hidden')
})