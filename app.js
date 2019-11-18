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

console.log(ulElement);