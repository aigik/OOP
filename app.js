// inimene kirjeldus
let eesNimi, pereNimi;
let vanus;

function taisNimi(eesNimi, pereNimi){
return `${eesNimi} ${pereNimi}`;
}

function arvutaVanus(synnikuupaev){
    synnikuupaev = new Date(synnikuupaev);
    vaheSekundites = Date.now() - synnikuupaev.getTime();
    vanusDate = new Date(vaheSekundites);
    aastaDate = vanusDate.getUTCFullYear();
    vanus = aastaDate - 1970;
    return `vanus: ${vanus}`;
}

console.log(taisNimi("Opetaja", "Laps"));
console.log(arvutaVanus("2014-08-01"));


/* ei tööta
function vanus(kuupaev) {
    var today = new Date();
    var sunnikuuPaev = new Date(kuupaev);
    var vanus = today.getFullYear() - sunnikuuPaev.getMonth();
    var kuu = today.getMonth() - sunnikuuPaev.getMonth();
    if (kuu < 0 || (kuu === 0 && today.GetDate() < sunnikuuPaev())) {
        vanus--;
    }
    return vanus;
}*/