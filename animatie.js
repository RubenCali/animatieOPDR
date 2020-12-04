const animeerKnop = document.querySelector('.animeer-knop');
 const balKnop =  document.querySelector('.vlakje');
 const menu =  document.querySelector('.fa-bars');
 const closed =  document.querySelector('.fa-times');

animeerKnop.addEventListener('click', animeerBall)
function animeerBall(){
    balKnop.classList.toggle('vlakje__naar-rechts');
}

setTimeout( () => {
    balKnop.classList.toggle('vlakje__naar-rechts');
}, 2000) 

const menuKnop = document.querySelector('.nav__knop');
const navigatieItems = document.querySelectorAll('.nav__link');
menuKnop.addEventListener('click', () => {
    navigatieItems.forEach( (item,index) => {
        setTimeout( () => {
            setTimeout( () => {
                item.classList.toggle('nav__link--schuif-in')
            }, 100 * index);
        })
    });
    menu.classList.toggle('verberg');
    closed.classList.toggle('verberg');

});