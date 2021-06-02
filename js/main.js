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

//Surasti visas darzoves
//Kiekvienos darzoves teksta pakeisti i "Pomidoras"
//kiekvienai darzovei suteikti CSS class "pomidoras"

/*
const liDOM = document.querySelectorAll('li');


for (let i = 0; i < liDOM.length; i++) {
    console.log(liDOM[i]);
    liDOM[i].innerText = 'Israuta darzove';
}
*/

const liDOM = document.querySelectorAll('li');

for (let i = 0; i < liDOM.length; i++) {
    liDOM[i].innerText = 'Pomidoras';
    liDOM[i].classList.add('pomidoras');
}