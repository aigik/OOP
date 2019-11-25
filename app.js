// inimene kirjeldus OOP abil
// inimese konstruktor (skp=synnikuupäev)
function Isik(n, skp){
    this.nimi = n;
    this.synnikuupaev = new Date(skp);

    // arvuta vanus
    this.arvutaVanus = function(){
        const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
        const vanusDateKujul = new Date(vaheSekundites);
        const taisAasta = vanusDateKujul.getUTCFullYear();
        const vanus = taisAasta - 1970;
        return vanus;
    }
}

const aigi = new Isik('Aigi', '1983-08-13');
const kadi = new Isik('Kadi', '1989-12-23');
console.log(aigi.arvutaVanus());
console.log(kadi.arvutaVanus());