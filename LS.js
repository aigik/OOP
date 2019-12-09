// Local Storage

class LS {
    // raamatute lugemine LS-st
loeRaamatud(){
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
   salvestaRaamat(r){
       // tekitame raamatute massiiv
       const raamatud = this.loeRaamatud();
       // lükkame uue raamatu andmed massiivi
       raamatud.push(r);
       // lisame andmed LS-sse
       localStorage.setItem('raamatud', JSON.stringify(raamatud));
       // console.log(raamatud);
   }

   // raamatu kustutamine LS-st
  kustutaRaamatLS(isbn){
    // vaatame, millised raamatud on olemas
    const raamatud = this.loeRaamatud();
    raamatud.forEach(function(raamat, index){
      // loeme andmed LS-st ühekaupa
      // ja võrdleme
      if(raamat.isbn === isbn){
        raamatud.splice(index, 1); // kustutame valitud element
      }
    });
    // lisame andmed LS-sse
    localStorage.setItem('raamatud', JSON.stringify(raamatud));
    // kinnitame kustutamist teade väljastamiseks
    return true;
  }
}