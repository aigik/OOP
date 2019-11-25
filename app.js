// inimene kirjeldus OOP abil
// Klasside pärilus
class Isik {
    // konstruktor
    constructor(e, p, ){
        this.eesnimi = e;
        this.perenimi = p;
    }

    // tervitus meetod
    tervitus(){
        return `Tere, ${this.eesnimi} ${this.perenimi} !`;
    }

    // kliendi klass
    class Klient extends Isik {
        // konstruktor
        constructor(e, p, t, s){
            super(e, p);
            this.telefon = t;
            this.staatus = s;
        }

    // staatiline meetod
    static kuutasu(){
        return 5;
    }
}

const kadi = new Isik('Kadi', 'Tamm', '1234 56677', 'hõbe');
console.log(kadi.tervitus());
console.log(kadi.kuutasu());
