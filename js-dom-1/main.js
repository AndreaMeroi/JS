/*
Consegna

Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

BONUS

Facciamo accendi e spegni:


Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
 */

//select Button 
const buttonEl = document.getElementById('kickStarter')
//select lamp on 

let isOn = false

//add eventListener 
buttonEl.addEventListener('click', function () {

    //Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
    const kickStarter = document.getElementById('kickStarter')
    const yelloLamp = document.getElementById('pic')
    //utilizzo true e false in un IF per selezionare in quale caso mostrare la lamp acceso o spenta
    if (!isOn) {
        // add innetrHTML changing 
        kickStarter.innerHTML = 'Spegni'
        // add img changing 
        yelloLamp.src = './img /yellow_lamp.png'
        isOn = true
    } else {
        kickStarter.innerHTML = 'Accendi'
        yelloLamp.src = './img /white_lamp.png'
        isOn = false
    }
})





