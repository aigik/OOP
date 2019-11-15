// document meetodid
// multiply elements selectors
let sisu = document.getElementsByClassName('collection-item');
console.log(sisu);
console.log(sisu[2]);
sisu[0].style.color = 'orange';
sisu[2].textContent = 'Õpi arvutivõrgud';

// querySelector + klassi nime järgi
let nimekirjaElemendid = document.querySelector('ul').getElementsByClassName('collection-item');

// elemendi nime järgi
nimekirjaElemendid = document.getElementsByTagName('li');

// teisendame HTMLCollection massiiviks (array)
nimekirjaElemendid = Array.from(nimekirjaElemendid);
// massiivi meetodite kasutamine
nimekirjaElemendid.reverse();

// massiivi läbimine tsükliga
// for
for(let i = 0; i < nimekirjaElemendid.length; i++){
    nimekirjaElemendid[i].style.background = '#ddd';
    nimekirjaElemendid[1].style.background = '#f4f4f4';
//console.log(nimekirjaElemendid[i].className);
}

// forEach
//nimekirjaElemendid.forEach(function(element){
  //  console.log(element);
    //element.style.background = '#ddd';
//});

let nimekiriPaaritu = document.querySelectorAll('li:nth-child(odd)');
console.log(nimekiriPaaritu);

let nimekiriPaaris = document.querySelectorAll('li:nth-child(even)');
console.log(nimekiriPaaris);