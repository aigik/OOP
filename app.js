// sündmused
const kustutaKoik = document.querySelector('.clear-task');
const text = document.querySelector('h5');
const kaart = document.querySelector('.card');
//click
// kustutaKoik.addEventListener('click', syndmus);
// double click
// kustutaKoik.addEventListener('dblclick', syndmus);
// mouse down
// kustutaKoik.addEventListener('mousedown', syndmus);
// mouse up
// kustutaKoik.addEventListener('mouseup', syndmus);
// mouse enter
// kustutaKoik.addEventListener('mouseenter', syndmus);
// mouse leave
// kustutaKoik.addEventListener('mouseleave', syndmus);
// mouse over
// kustutaKoik.addEventListener('mouseover', syndmus);
// mouse out
// kustutaKoik.addEventListener('mouseout', syndmus);
// mouse move
// kustutaKoik.addEventListener('mousemove', syndmus);
kaart.addEventListener('mousemove', syndmus);
    

function syndmus(e){
    //logi sündmuse tüüp
    console.log(`Sündmuse tüüp: ${e.type}`);
    // muuda text sisu: HiirX: x koord HiirY: y koord
    text.textContent = `HiirX: ${e.offsetY} HiirY: ${e.offsetY}`;
    // koosta body värv rgb(Xkoodr, 40)
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

}

