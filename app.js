// storage

// salvestame väärtus
  localStorage.setItem('eesnimi', 'Aigi');
  localStorage.setItem('perenimi', 'Kallaste');

 // väärtuse eemaldamine
 // localStorage.removeItem('nimi');

 //väärtuse lugemine
 // const eesnimi = localStorage.getItem('eesnimi');
 // console.log(eesnimi);
 // const perenimi = localStorage.getItem('perenimi');
 // console.log(perenimi);

 // eemalda kõik väärtused
 // localStorage.clear();

 document.querySelector('form').addEventListener('submit', salvesta);

 function salvesta(e){
     const uusYlesanne = document.getElementById('task').value;
     let ylesanded;
     if(localStorage.getItem('tasks') === null){
         ylesanded = []; // tekitame massiivi, kui veel ülesandeid pole
     } else {
         ylesanded = JSON.parse(localStorage.getItem('tasks'));
         // loeme LS andmed, teisendame JSON elemendiks - JS struktuuriks
     }
     console.log(ylesanded);
     ylesanded.push(uusYlesanne);
     console.log('ulesanne lisatud');
     localStorage.setItem('tasks', JSON.stringify(ylesanded)); // lisame andmed LS sisse
     e.preventDefault();
 }

 // loeme sisetatud ülesanded
 const ylesanded = JSON.parse(localStorage.getItem('tasks'));
 ylesanded.forEach(ylesanne => {
     console.log(ylesanne);
 });