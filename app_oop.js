// app_oop.js

// Raamat
class Raamat {
    constructor(p, a, i){
        this.pealkiri = p;
        this.autor = a;
        this.isbn =i;
    }
}

// kasutajaliides
class KL {
    // puhastaSisend ()
    puhastaSisend(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    // lisaRaamatTabelisse
    lisaRaamatTabelisse(r) {
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
    const tabel = document.getElementById('book-list');
    tabel.appendChild(rida);
    }

    // teade väljastatakse
    teade(s, stiil){
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

    // kustutaRaamat tabelist
    kustutaRaamatTabelist(kustutaElement){
        if(kustutaElement.className === 'kustuta'){
            const tabeliRida = kustutaElement.parentElement.parentElement;
            tabeliRida.remove();
            return true;
        }
    }
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

// loome kasutajaliidese objekt temaga opereerimiseks
const kl = new KL();

// kui mingid andmed on puudu, siis anname märku
if(pealkiri == '' | autor == '' | isbn == ''){
    kl.teade('Tuleb täita kõik väljad!', 'invalid');
} else {
    // muidu
    // lisame sisestatud raamat tabelisse
    kl.lisaRaamatTabelisse(raamat);

    // loome LS objekt funktsionaali kutsumiseks
    //const ls = new LS();

    // salvestame raamatu andmed LS-sse
    // ls.salvestaRaamat(raamat);
    // anname teada lisamisest
     kl.teade('Raamat on lisatud!', 'valid');

    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();

}

e.preventDefault();
}
