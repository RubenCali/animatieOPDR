document.querySelector('.animeer-knop').addEventListener('click', (e) => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts')
})
setTimeout( () => {
    document.querySelector('.vlakje').classList.toggle('vlakje__naar-rechts');
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
    document.querySelector('.fa-bars').classList.toggle('verberg');
    document.querySelector('.fa-times').classList.toggle('verberg');

});