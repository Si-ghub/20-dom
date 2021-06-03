/*
Pakeisti tekstini turini h1 elemente i "Labas vakaras!"
*/

/*
const aDOM = document.querySelector('a');
aDOM.innerText = 'Spausk mane!';
*/

/*
const liDOM = document.querySelectorAll('li');
const ingredientai = [];



for (let i = 0; i < liDOM.length; i++) {
    const ingredientas = liDOM[i].innerText.toUpperCase();
    ingredientai.push(ingredientas);
}


console.log(ingredientai);

*/

/*
const liDOM = document.querySelectorAll('li');
for (let i = 0; i < liDOM.length; i++) {
    liDOM[i].classList.add('darzove');
}
*/

/*
Surasti visas darzoves
Kiekvienos darzoves teksta pakeisti i "Pomidoras"
kiekvienai darzovei suteikti CSS class "pomidoras"
*/
/*
const liDOM = document.querySelectorAll('li');


for (let i = 0; i < liDOM.length; i++) {
    console.log(liDOM[i]);
    liDOM[i].innerText = 'Israuta darzove';
}
*/

/*
const liDOM = document.querySelectorAll('li');

for (let i = 0; i < liDOM.length; i++) {
    liDOM[i].innerText = 'Pomidoras';
    liDOM[i].classList.add('pomidoras');
}
*/


/* UZDUOTIS
Susirasti logotipa

Susirasti hamburgeri

Paspaudus ant hamburgerio, logotipo elementui reikia uzdeti CSS class pavadinimu "big"

Antra karta paspaudus ant hamburgerio, logotipo elementui reikia nuimti CSS class pavadinimu "big"

Susirasti meniu elementa (nav)

Paspaudus ant hamburgerio, meniu elementui reikia uzdeti CSS class pavadinimu "visible"

Antra karta paspaudus ant hamburgerio, meniu elementui reikia nuimti CSS class pavadinimu "visible"

*/

/*
const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');
const navDOM = document.querySelector('nav');


console.log(logoDOM);
console.log(hamburgerDOM);


hamburgerDOM.addEventListener('click', () => {
    logoDOM.classList.toggle('big');
    navDOM.classList.toggle('visible');
})
*/

/*UZDUOTIS 7
Pradinis rezultatas lygus nuliui

Susirasti minuso mygtuka

Susirasti pliuso mygtuka

Susirasti rezultato atvaizdavimo elementa

Paspaudus ant minuso, rezultatas mazinamas vienu vienetu

Paspaudus ant pliuso, rezultatas didinamas vienu vienetu

Paspaudus ant reset, rezultatas turi grizti i nuli

Susirasti h1 elementa

Padaryti, jog paspaudus viena is mygtuku (pliusas, minusas) h1 elemento tekstas pasikeistu i "Žaidimas progrese"

Jei zaidimas yra nu'reset'inamas - h1 tekstas grizta i pradine reiksme
*/
//1 sprendimo budas


let rezultatas = 0;
const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const h1DOM = document.querySelector('h1');
const resetDOM = document.querySelector('.reset');


minusDOM.addEventListener('click', () => {
    rezultatas = rezultatas - 1;              //gali buti naudojams --resultatas
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = 'Žaidimas progrese'
})

plusDOM.addEventListener('click', () => {
    rezultatas = rezultatas + 1;             //gali buti naudojama ++resultatas
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = 'Te prasideda žaidynės!'
})


resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = ''

})






