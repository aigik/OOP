// document meetodid
// elementide kustutamine

// leia antud DOM-ist kõik li elemendid
const liElemendid = document.querySelectorAll('li');
// kustuta konkreetne element
liElemendid[2].remove();

// leia antud DOM-is ul element
const ulElement = document.querySelector('ul.collection');
// kustuta antud elemendist li
// li on ul child elemendid
ulElement.removeChild(liElemendid[1]);

// nimekirja element
const liElement = liElemendid[0];
// kustutamise link
const link = liElement.children[0];
// class ja atribute kustutamine
let sisu = link.className;
sisu = link.classList;
sisu = link.classList[1];
link.classList.remove('Secondary-content');
link.classList.add('Secondary-content');
sisu = link.classList;
sisu = link;

// atribuut
sisu = link.getAttribute('href');
link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'Google');
link.removeAttribute('title');
sisu = link;

console.log(sisu);