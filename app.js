// window objects / methods / properties

// alert
 // window.alert('Tere Hommikust!');
 // alert('Tere Hommikust!');

 // propt
 // const sisend = prompt('Sisesta oma nimi');
 // alert('Tere Hommikust, ' + sisend + '!');

 // confirm
 // if(confirm('Kas oled n6us?')){
 //    console.log('jah');
 //} else {
//   console.log('ei');
 //}

 // ekraani v2lim66dud pikslites
 // let valiKorgus = window.outerHeight;
 // let valiLaius = window.outerWidth;
 // console.log(valiLaius)

 // ekraani sisem66dud (content area) piksites
 // let siseKorgus = window.innerHeight;
 // let siseLaius = window.innerWidth;
 // console.log(siseLaius)

 //scroll (pikslite arv scrollides)
 // scrolY = window.scrollY;
 // scrolX = window.scrolX;
 // console.log(scrolY)

 // location objekt (to get current page address (url)and to redirect the browser to a new page)
 let objekt = window.location;
 let hostname = window.location.hostname; // returns the domain name of the web host
 let port = window.location.port; // returns the number of the internet host port (of the current page)
 let href = window.location.href; // returns the href (URL) of the current page
 let search = window.location.search;

 // redirect
 // window.location.href = 'https://khk.ee';
 // reload
 // window.location.reload();

 console.log(search);
