// inimene kirjeldus OOP abil
// inimese konstruktor (skp=synnikuupäev)
function Isik(e, p, skp){
    this.eesnimi = e;
    this.perenimi = p;
    this.synnikuupaev = new Date(skp);

    // väljasta täisnimi
    this.taisNimi = function(){
        return `${this.eesnimi} ${this.perenimi}`;
    }

    // arvuta vanus
    this.arvutaVanus = function(){
        const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
        const vanusDateKujul = new Date(vaheSekundites);
        const taisAasta = vanusDateKujul.getUTCFullYear();
        const vanus = taisAasta - 1970;
        return vanus;
    }
}

const aigi = new Isik('Aigi', 'Kallaste', '1983-08-13');
const kadi = new Isik('Kadi', 'Tamm', '1989-12-23');
console.log(aigi.arvutaVanus());
console.log(kadi.arvutaVanus());