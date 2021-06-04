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

/*      //UZDUOTIS 7//                  I DALIS
1. Pradinis rezultatas lygus nuliui

2. Susirasti minuso mygtuka

3. Susirasti pliuso mygtuka

4. Susirasti rezultato atvaizdavimo elementa

5. Paspaudus ant minuso, rezultatas mazinamas vienu vienetu

6. Paspaudus ant pliuso, rezultatas didinamas vienu vienetu

7. Paspaudus ant reset, rezultatas turi grizti i nuli

8. Susirasti h1 elementa

9 Padaryti, jog paspaudus viena is mygtuku (pliusas, minusas) h1 elemento tekstas pasikeistu i "Žaidimas progrese"

10. Jei zaidimas yra nu'reset'inamas - h1 tekstas grizta i pradine reiksme

/*                                       II DALIS
1. Susirasti zinuciu rasymo elementa (ul)

2. Kiekviena karta prasidedant zaidimui, reikia, jog zinuciu sarase atsirastu irasas su tekstu "Tu pasileidai zaidima - sekmes!"

3. Kiekviena karta spaudziant minuso mygtuka, reikia, jog zinuciu sarase atsirastu irasas su tekstu "Paspaudei minusa ir dabartinis rezultatas yra [skaicius]."

4. Kiekviena karta spaudziant pliuso mygtuka, reikia, jog zinuciu sarase atsirastu irasas su tekstu "Paspaudei pliusa ir dabartinis rezultatas yra [skaicius]."

5. Kiekviena karta spaudziant reset mygtuka, reikia, jog zinuciu sarase atsirastu irasas su tekstu "Paspaudei reset ir dabartinis rezultatas yra [skaicius]."
*/

//  SPRENDIMAS //

/*
let rezultatas = 0;
const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');           // << susirandame visus kintamuosius
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');
const ulDOM = document.querySelector('ul');

const gameInProgressMessage = 'Žaidimas progrese';
const initialH1Text = h1DOM.innerText;

ulDOM.innerHTML = `<li>Tu pasileidai zaidima - sekmes!</li>`; //  << issitraukiame vidini HTML teksta >>

minusDOM.addEventListener('click', () => {
    rezultatas = rezultatas - 1;                             //g.b naudojamas --resultatas
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = gameInProgressMessage;                //g.b stringas 'Žaidimas progrese'
    ulDOM.innerHTML += `<li>Paspaudei minusa ir dabartinis rezultatas yra ${rezultatas}.</li>`;
})

plusDOM.addEventListener('click', () => {
    rezultatas = rezultatas + 1;                           //g.b naudojama ++resultatas
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = gameInProgressMessage;               //g.b stringas 'Žaidimas progrese'
    ulDOM.innerHTML += `<li>Paspaudei pliusa ir dabartinis rezultatas yra ${rezultatas}.</li>`;
})


resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = initialH1Text;                       //g.b stringas 'Te prasideda žaidynės!'
    ulDOM.innerHTML += `<li>Paspaudei reset ir dabartinis rezultatas yra ${rezultatas}.</li>`
})
*/

/* //10 UZDUOTIS
1. Formoje parasytas tekstas, po submit mygtuko paspaudimo turi buti atvaizduotas <span> elemente.

2. input elemento reiksme istraukia kreipiantis i to elemento value parametra, pvz.: element.value

*/

const buttonDOM = document.querySelector('button');
const inputDOM = document.querySelector('input');
const spanDOM = document.querySelector('span');

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    spanDOM.innerText = inputDOM.value;
    inputDOM.value = '';
})



