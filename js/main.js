/*
localStorage.setItem('ism','Behruz')
localStorage.setItem('familiya','Muhammadov')
localStorage.setItem('yosh','13 yoshda')

localStorage.clear()

let uningIsmi = localStorage.getItem('ism')
let uningFamiliyasi = localStorage.getItem('familiya')
let uningYoshi = localStorage.getItem('yosh')

console.log(uningIsmi,uningFamiliyasi,uningYoshi)*/
/*
let sorov = new XMLHttpRequest();
sorov.open('get','https://getty.uz/serverdan/malumot/olish');
sorov.send();

sorov.onload = function (){
    console.log(sorov.responseText)
}*//*

let jsFile = {ismi: 'Behruz', yoshi: '13'}
let jsonFile = '{"ismi": "Bilolxoja","yoshi": "14"}'
/!*
console.log(JSON.stringify(jsFile))
*!/
console.log(JSON.parse(jsonFile));*/

let sorov = new XMLHttpRequest();
sorov.open('get','jsonFile.json')
sorov.send();

sorov.onload = function (){
    let byData = JSON.parse(sorov.responseText)
    console.log(byData);
}