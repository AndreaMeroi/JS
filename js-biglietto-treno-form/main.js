/*
Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

*/

/*MILESTONE 1:Iniziamo implementando il programma senza alcuna estetica: 
usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà 
anch’essa da scrivere in console. 

--->Tutta questa parte è stata posizionata all'interno dell'event listener<---

*/



console.log('js-biglietto-treno-form');

/* MILESTONE 2:Solo una volta che il milestone 1 sarà completo e funzionante 
allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e 
visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati 
in pagina (il prezzo dovrà essere formattato con massimo due decimali, 
per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//seleziono i nodes della dom 

const nameFieldEl = document.getElementById('name-field')
const KmFieldEl = document.getElementById('Km-field')
const AgeFieldEL = document.getElementById('Age-field')

const outputEl = document.getElementById('output')
const pricePerKm = 0.21



const formEl = document.querySelector('form')

formEl.addEventListener('submit', (e) => {
    e.preventDefault()

    const nameFieldValue = nameFieldEl.value
    const KmFieldValue = Number(KmFieldEl.value)
    const AgeFieldValue = Number(AgeFieldEL.value)




    let price = pricePerKm * KmFieldValue

    if (AgeFieldValue <= 18) {
        price = price * 0.80
    } else if (AgeFieldValue >= 65) {
        price = price * 0.60
    }

    const finalPrice = price.toFixed(2)
    console.log(finalPrice);

    // utilizzo la funzione getRndInteger per generare il Codice CP e il wagon Numb
    const cpCode = getRndInteger(90000, 100000)
    const wagonNumb = getRndInteger(1, 9)


    // faccio generare la card dopo il submit del form utilizzando la funzione che ho creato 

    outputEl.innerHTML = generateTicketMarkup(nameFieldValue, finalPrice, cpCode, wagonNumb)

})

// helper function 

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* per inserire dinamicamente la card anzichè nel file html 
    la metto tra i backtick cosi da poter interpolare eventuali variabili e funzioni
*/
// la funzione accetta i 4 parametri del markup
function generateTicketMarkup(nameFieldValue, finalPrice, cpCode, wagonNumb) {

    // uso return perchè la funzione deve restituire il markup descritto

    return `
 <div class="card">
 <div class="card-header">
 ${nameFieldValue}
 </div>
            <div class="card-body">
                <h3>Your Ticket</h3>
                <div>
                    <span>Final Price</span>
                    <strong id="price">${finalPrice}&euro;</strong>
                </div>
                <div class="card-footer">
                    <div>
                        <span>CP-CODE</span>
                        <strong class="cp-code">${cpCode}</strong>
                    </div>
                    <div>
                        <span>Wagon Number</span>
                        <strong class="wagon-number">${wagonNumb}</strong>
                    </div>
                </div>
            </div>
        </div>
`

}










/*
MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci 
allo stile, raffinando la parte di HTML e CSS in modo da renderla 
esteticamente gradevole.
 */

