console.log('js-snack-es6');


/*
Esercizio di oggi: Snack Array e Oggetti
cartella/repo: js-snack-es6

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const biciclette = [
    {

        name: 'primavera',
        peso: 7
    },
    {

        name: 'vento',
        peso: 5
    },
    {

        name: 'veloce',
        peso: 3
    },
    {

        name: 'robusta',
        peso: 9
    },
    {

        name: 'magica',
        peso: 12
    },
]

// estrai il valore peso di ognuno degli oggetti dell'aray > ciclo for

let peso_minore = biciclette[0].peso /*fingendo di non sapere il valore peso del
 primo obj in questo modo indico il primo elemento 
 dell'array con biciclette[0] dove 0 rappresenta l'indice che identifica il primo elemento di biciclette,
 poi identifico la chiave diriferimento con .peso per avere un numero da confrontare con altri numeri (altrimenti
  il confronto sarebbe tra stringa '' e numeri e non funzionerebbe )
*/



for (let i = 0; i < biciclette.length; i++) {
    const pesoBici = biciclette[i].peso
    // console.log(pesoBici);

    // identifica quale ha il peso minore 
    if (pesoBici < peso_minore) {
        peso_minore = pesoBici;
    }
}
console.log(peso_minore);

//per stampare a schermo il valore seleziono il nodo da utilizzare 
const pEl = document.querySelector('p')

// inserisco le nuove info nel nodo selezionato 
const postMarkup = `<p>La bici dal peso minore pesa: ${peso_minore}</p>`
pEl.insertAdjacentHTML('beforeend', postMarkup)


/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono 
solo nomi e falli subiti e stampiamo tutto in console.
 */

const squadre = [
    {
        nome: 'inter',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'como',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'milan',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'juve',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'toro',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'roma',
        punti_fatti: 0,
        falli_subiti: 0
    }
]
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

// ciclare nell'array
for (let i = 0; i < squadre.length; i++) {

}
//identificare dove i numeri sono uguali a 0 
// dove il numer è = 0 inserire un numero generato automaticamente (math.random)


