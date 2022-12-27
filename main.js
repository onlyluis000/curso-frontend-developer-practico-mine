const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleMenu);

const menuMobile = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');
menu.addEventListener('click', toggleMenu);

const iconShoppingCart = document.querySelector('.navbar-shopping-cart');
const menuCart= document.querySelector('.product-detail');
iconShoppingCart.addEventListener('click', toggleMenu);

const mainContainer = document.querySelector(".cards-container")

function toggleMenu (event){
    switch(event.target.className){
    case 'menu':
        menuMobile.classList.toggle('toggleShowing');
        if(!desktopMenu.classList.contains('toggleShowing')) {desktopMenu.classList.add('toggleShowing');}
        if(!menuCart.classList.contains('toggleShowing'))  {menuCart.classList.add('toggleShowing');}
    break;
    
    case 'navbar-email':
    desktopMenu.classList.toggle('toggleShowing');
    if(!menuCart.classList.contains('toggleShowing'))  {menuCart.classList.add('toggleShowing');}
    if(!menuMobile.classList.contains('toggleShowing'))  {menuMobile.classList.add('toggleShowing');}
    break;

    case 'navbar-shopping-cart':
    menuCart.classList.toggle('toggleShowing');
    if(!desktopMenu.classList.contains('toggleShowing'))  {desktopMenu.classList.add('toggleShowing');}
    if(!menuMobile.classList.contains('toggleShowing'))  {menuMobile.classList.add('toggleShowing');}
    break;

    default: break;
    }
    
}

let cards = [{nombre: "bike", precio: 150},
{nombre: "phone", precio: 200},
{nombre: "tv", precio: 300},
{nombre: "computer", precio: 350},
{nombre: "mouse", precio: 20}
]

for(let card of cards)
{
    let divCard = document.createElement('div')
    divCard.classList.add('product-card')

    let img = document.createElement('img')
    img.setAttribute('src', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    img.setAttribute('alt', '')
    let div2 = document.createElement('div')
    div2.classList.add('product-info')

        let div3 = document.createElement('div')
            let price = document.createElement('p')
            price.innerText = "$" + card.precio + ",00";
            let name = document.createElement('p')
            name.innerText = card.nombre;
        let figure = document.createElement('figure')
        let addToCartButtom = document.createElement('img')
        addToCartButtom.setAttribute('src','./icons/bt_add_to_cart.svg')
        addToCartButtom.setAttribute('alt', '')

    mainContainer.append(divCard)
    divCard.append(img, div2);
    div2.append(div3, figure);
    div3.append(price, name);
    figure.append(addToCartButtom)
    
    

        

}


