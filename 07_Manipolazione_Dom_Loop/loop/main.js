console.log('hi');

//seleziono il nodo da popolare ciclando in un elenco/lista
const listUl = document.getElementById('tasks')

// lista di elementi in cui ciclare
const tasks = [
    'lean php',
    'learn js',
    'learn react'
]
/*Costruisco la logica per popolare il tag <ul> con la lista selezionata*/

// uso LET anzichè CONST perchè la variabile d'appoggio dovrà variare
let itemStrings = ''

for (let i = 0; i < tasks.length; i++) {
    const thisTask = tasks[i]
    console.log(thisTask);

    // create a new <li> tag for each tasks

    const LiString = `<li>${thisTask}</li>`

    // ad ogni ciclo devo aggiungere a se stesso il nuovo <li> perciò +=
    itemStrings += LiString

}

console.log(itemStrings);
listUl.innerHTML = itemStrings

/* 
stesso risultato UTILIZZANDO CreateElement
In questo caso non ho più bisogno della lista esterna 
che prima era let itemStrings = '' 
*/

const ListNames = document.getElementById('names')

const names = [
    'qui',
    'quo',
    'qua'
]

for (let i = 0; i < names.length; i++) {

    const li = document.createElement('li')
    li.append(names[i])
    ListNames.appendChild(li)
}

/*
in questo caso essendo i dati degli oggetti posso utilizzae i metodi
ad esempio posso rendere cliccabili gli elementi della lista
*/
ListNames.addEventListener('click', function () {
    console.log('ciao');

})




