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

// kirjeldame raamatu lisamise sündmust
document.getElementById('book-form') .addEventListener('submit', lisaRaamat);
// raamatu lisamise funktsioon
function lisaRaamat(e){
    const pealkiri = document.getElementById('author').value;
    const autor = document.getElementById('title').value;
    const isbn = document.getElementById('isbn').value;

// loome raamat andmete põhjal
const raamat = new Raamat(pealkiri, autor, isbn);

    console.log(raamat);

    // loome kasutajaliidese objekt temaga opereerimiseks
    const kl = new KL();

    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();

    e.preventDefault();
}