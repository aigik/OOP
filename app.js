// Raamatu konstruktor
function Raamat(a, p, i){
    this.autor = a;
    this.pealkiri = p;
    this.isbn = i;
}

// kasutajaliides - KL
// konstruktor
function KL(){   // meil on vaja seda elementi, et ainult organiseerida töötlust

}

// KL funktsionaal
// sisendväljade puhastamine
KL.prototype.puhastaSisend = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// raamatu lisamine tabelisse
KL.prototype.lisaRaamatTabelisse = function(r){
    // loome tabeli rida
    const rida = document.createElement('tr');
    // täidame rida tabeli andmetega
    rida.innerHTML = `
    <td>${r.autor}</td>
    <td>${r.pealkiri}</td>
    <td>${r.isbn}</td>
    <td><a href="#" class="kustuta">X</a></td>
    `;
    // lisame rida tabelisse
    tabel = document.getElementById('book-list');
    tabel.appendChild(rida);
}

// raamatu kustutamine tabelist
KL.prototype.kustutaRaamatTabelist = function(kustutaElement){
    if(kustutaElement.className === 'kustuta'){
        tabeliRida = kustutaElement.parentElement.parentElement;
        tabeliRida.remove();
        return true;
    }   
}

// teate väljastamine
KL.prototype.teade = function(s, stiil){
    // loome div, kuhu lisada teate sõnum
    const div = document.createElement('div');
    div.className = `alert ${stiil}`;
    // lisame sõnumi teksti div sisse
    const tekst = document.createTextNode(s);
    div.appendChild(tekst);
    // leiame elemendid, mille suhtes tuleb lisada uus element
    const konteiner = document.querySelector('.container');
    //console.log(konteiner);
    const vorm = document.getElementById('book.form');
    // lisame teade dokumendi
    konteiner.insertBefore(div, vorm);

    // kutsume teade 5 sekundi möödumisel
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 5000);
    
}

// raamatute lugemine LS-st
KL.prototype.loeRaamatud = function(){
 // loome raamatute hoidla LS-is
 let raamatud;
 // kui raamatud veel LS-s ei eksisteeri
 if(localStorage.getItem('raamatud') === null){
     raamatud = [];
 } else {
     // kui raamatud juba olemas, saame need kätte
     raamatud = JSON.parse(localStorage.getItem('raamatud'));
 }
 return raamatud;
}

// raamatu salvestamine local storage -sse
KL.prototype.salvestaRaamat = function(r){
    // tekitame raamatute massiiv
    raamatud = this.loeRaamatud();
    // lükkame uue raamatu andmed massiivi
    raamatud.push(r);
    // lisame andmed LS-sse
    localStorage.setItem('raamatud', JSON.stringify(raamatud));
    console.log(raamatud);
}

// kirjeldame raamatu lisamise sündmust
document.getElementById('book-form') .addEventListener('submit', lisaRaamat);
// raamatu lisamise funktsioon
function lisaRaamat(e){
    const pealkiri = document.getElementById('title').value;
    const autor = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

// loome raamat andmete põhjal
const raamat = new Raamat(pealkiri, autor, isbn);

    console.log(raamat);

    // loome kasutajaliidese objekt temaga opereerimiseks
    const kl = new KL();

    // kui mingid andmed on puudu, siis anname märku
    if(pealkiri == '' | autor == '' | isbn == ''){
        kl.teade('Tuleb täita kõik väljad!', 'invalid');
    } else {
        // muidu
        // lisame sisestatud raamat tabelisse
        kl.lisaRaamatTabelisse(raamat);

        // salvestame raamatu andmed LS-sse
        kl.salvestaRaamat(raamat);

        kl.teade('Raamat on lisatud!', 'valid');
    }

    // lisame sisestatud raamat tabelisse
    kl.lisaRaamatTabelisse(raamat);

    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();

    e.preventDefault();
}

// raamatu kustutamise sündmus
document.getElementById('book-list').addEventListener('click', kustutaRaamat);

function kustutaRaamat(e){
    // loome kasutajaliidese objekt temaga opereerimiseks
    const kl = new KL();

    // kutsume tabelis oleva raamatu kustutamise funktsioon
    onKustutatud = kl.kustutaRaamatTabelist(e.target);

    // väljastame vastav teade
    if(onKustutatud){
        kl.teade('Raamat on kustutatud!', 'valid');
    }
    
    e.preventDefault();
}