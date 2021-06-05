
const klientasDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const pgrPatiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const gerimaiDOM = document.querySelectorAll('drinks');

const uzsakytiDOM = document.querySelector('button');
const uzsakymasDOM = document.querySelector('.order');

uzsakytiDOM.addEventListener('click', (event) => {
    event.preventDefault();

    function pasirinktiMaista(patiekalas) {
        if (patiekalas) {
            return 'nori';
        }
        return 'nenori';
    }

    function pasirinktiGerima(gerimas) {
        for (let i = 0; i < gerimas.length; i++) {
            let gerimoPavadinimas = ''
            if (gerimas[i].pasirinkta === true) {
                return gerimoPavadinimas = `${gerimas[i].value}`;
            }
        }

    }

    uzsakymasDOM.innerText = `Uzsakovas vardu ${klientasDOM.value}, ${pasirinktiMaista(sriubaDOM)} sriubos, ${pasirinktiMaista(pgrPatiekalasDOM)} pagrindinio patiekalo, ${pasirinktiMaista(desertasDOM)} deserto ir ${pasirinktiGerima(gerimaiDOM)} yra pasirinktas gerimas.`

});
