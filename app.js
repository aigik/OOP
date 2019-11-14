// document meetodid
// single element selectors

sisu = document.querySelector('#title'); // id j2rgi (get the first element with id title)
sisu = document.querySelector('.card-title'); // klassi nime j2rgi (get the first element with class card-title)
sisu = document.querySelector('h5'); // elemendi j2rgi

// stiili muutmine
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(2)').style.color = 'orange';
console.log(sisu);
