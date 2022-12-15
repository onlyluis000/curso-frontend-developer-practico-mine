const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleMenu);

const menuMobile = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');
menu.addEventListener('click', toggleMenu);


function toggleMenu (event){
    console.log(event)
    switch(event.target.className){
    case 'menu':
        menuMobile.classList.toggle('toggleShowing');
    break;
    
    case 'navbar-email':
    desktopMenu.classList.toggle('toggleShowing');
    break;
    default: break;
    }
}