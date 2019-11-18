// document meetodid
// elementide asendamine

// leia vana element h5
const vanaPealkiri = document.querySelector('h5');
// leia kaart, kus antud pealkiri on
const divCardAction = document.querySelector('.card-action');
// const pealkirjaDiv = document.querySelector('div.card-action');

// loo uus pealkiri
const uusPealkiri = document.createElement('h3');
// lisa id
uusPealkiri.id = 'new-title';
// lisa sisu
uusPealkiri.textContent = 'Uued ülesanded';
// uusPealkiri.appendChild(document.createTextNode('Uued ülesanded'));

//asenda vana pealkiri uuega
 divCardAction.replaceChild(uusPealkiri, vanaPealkiri);


console.log(uusPealkiri);