const btPlus = document.querySelector('.js-plus');
const colTransport = document.querySelector('.conteneur-section');

btPlus.addEventListener('click', fouvreferme);

function fouvreferme() {
    colTransport.classList.toggle('conteneur-section-invisible');
};