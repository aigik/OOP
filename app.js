// inimene kirjeldus OOP abil
// Prototüüpide pärilus
// inimese konstruktor
function Isik(e, p){
    this.eesnimi = e;
    this.perenimi = p;
}

    // väljasta täisnimi
    Isik.prototype.taisNimi = function(){
       return `${this.eesnimi} ${this.perenimi}`;
    }

// klient kontruktor
function Klient(e, p, t, s){ // konstruktori kasutamine
    Isik.call(this, e, p); 
    this.telefoninr = t;
    this.staatus = s;
}

// teiste meetodite/funktsioonide kasutamine
Klient.prototype = Object.create(Isik.prototype);
Klient.prototype.constructor = Klient;

// määrame täisnimi funktsioon Klient objektile
Klient.prototype.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi} - sinul on ${this.staatus} tase`;
}

const kadi = new Klient('Kadi', 'Tamm', '5678 9012', 'hõbe');
console.log(kadi.taisNimi());
