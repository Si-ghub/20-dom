// 1. Kiekviena komanda turi savo atskiras formas, kuriu deka yra registruojami pelnyti taskai

// 2. Kiekviena karta pelnius tasku, tai turi atsispindeti lentoje


const aiksteleDOM = document.querySelector('.aikstele');
const lentaDOM = document.querySelector('.lenta');
const namuRezultatasDOM = lentaDOM.querySelector('[data-komanda="namu"]');
const sveciuRezultatasDOM = lentaDOM.querySelector('[data-komanda="sveciu"]');

const namuKomandaDOM = aiksteleDOM.querySelector('[data-komanda="namu"]');
const taskaiNamuDOM = namuKomandaDOM.querySelectorAll('button');

const sveciuKomandaDOM = aiksteleDOM.querySelector('[data-komanda="sveciu"]');
const taskaiSveciuDOM = sveciuKomandaDOM.querySelectorAll('button');

// 1 sprendimo budas

// let - kintamojo iniciavimo budas
let namuKomandosTaskai = 0;
for (let i = 0; i < taskaiNamuDOM.length; i++) {
    const mygtukas = taskaiNamuDOM[i];
    mygtukas.addEventListener('click', () => {
        namuKomandosTaskai += i + 1;
        namuRezultatasDOM.innerText = namuKomandosTaskai;

    });
}

let sveciuKomandosTaskai = 0;

for (let i = 0; i < taskaiSveciuDOM.length; i++) {
    const mygtukas = taskaiSveciuDOM[i];
    mygtukas.addEventListener('click', () => {
        sveciuKomandosTaskai += i + 1;
        sveciuRezultatasDOM.innerText = sveciuKomandosTaskai;

    });
}

// 2 sprendimo budas
let namuRezultatas = 0;
let sveciuRezultatas = 0;

for (let i = 0; i < 3; i++) {
    taskaiNamuDOM[i].addEventListener('click', () => {
        namuRezultatas += i + 1;
        namuRezultatasDOM.innerText = namuRezultatas;
    })

    taskaiSveciuDOM[i].addEventListener('click', () => {
        sveciuRezultatas += i + 1;
        sveciuRezultatasDOM.innerText = sveciuRezultatas;
    })
}


