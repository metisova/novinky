const bodyElm = document.querySelector('body');
bodyElm.style.backgroundColor = '#e9e9e9';

const newsElm = document.querySelector('.news');
newsElm.style.backgroundColor = 'white';
newsElm.style.maxWidth = '60rem';

const titleElm = document.querySelector('h1');
titleElm.classList.add('news__title');
titleElm.textContent = 'Aktuální novinky';

const zprava1Elm = document.getElementById('zprava1');
zprava1Elm.classList.add('post--main');

const img3Elm = document.getElementById('img3');
img3Elm.src = 'img/zprava3-novy.jpg';
