console.log('hi');

// # Preparation 

//select the doms' nodes
//get the form elemnt
//get the input elements (per far funzionare il bottone e far creare la nuova card da aggiungere)
const rowEl = document.getElementById('my-team')
const formEl = document.querySelector('form')
const nameFieldEl = document.getElementById('name')
const roleFieldEl = document.getElementById('role')
const imageFieldEl = document.getElementById('image')

// verifico di aver preso correttamente i nodi della dom 
console.log(formEl, nameFieldEl, roleFieldEl, imageFieldEl);



//create team array 
const team = [
    {
        id: 1,
        name: 'wayne Barnet',
        role: 'Founder & Ceo',
        image: `https://picsum.photos/200/300?random=1`
    },
    {
        id: 2,
        name: 'Angela Croll',
        role: 'Chief Editor',
        image: `https://picsum.photos/200/300?random=2`

    },
    {
        id: 3,
        name: 'walter smith',
        role: 'CTO',
        image: `https://picsum.photos/200/300?random=3`

    },
    {
        id: 4,
        name: 'sara connor',
        role: 'Lead designer',
        image: `https://picsum.photos/200/300?random=4`

    },
    {
        id: 5,
        name: 'John Doe',
        role: 'Intern',
        image: `https://picsum.photos/200/300?random=5`
    },
    {
        id: 6,
        name: 'jane Smith',
        role: 'Marketing Manager',
        image: `https://picsum.photos/200/300?random=6`

    }

]

//invoco la funzione per renderizzare in pagina il markup
renderteam(team)

// add event listener to the button for the form submit event 

formEl.addEventListener('submit', function (e) {
    //prevent the default behaviour 
    e.preventDefault()

    //get all the form values (uso DIR anzichè LOG per renderlo come oggetto in console)
    console.dir(e.target);

    const name = nameFieldEl.value
    const role = roleFieldEl.value
    const image = imageFieldEl.value
    //genero automaticamente il nuovo ID (serve il -1 perchè la posizione è sempre -1 rispetto all'indice)
    const id = team[team.length - 1].id + 1


    //create a new obj for the member 
    const newMember = {
        id,
        name,
        role,
        image
    }
    console.log(newMember);

    //push the new obj into the array
    team.push(newMember)
    console.log(team);


    //update the DOM to render the new list (richiamando la funzione che ho creato prima)
    renderteam(team)

})

/*FUNCTIONS*/


function renderteam(team) {

    //per ripulire la dom ad ogni caricamento pagina setto su VUOTO il suo innerHTML 
    rowEl.innerHTML = ''

    // loop over the array 
    for (let i = 0; i < team.length; i++) {

        // - get the element for the current iteration 
        const member = team[i];

        // - DESTRUTTURO to create variables to hold values for each property of the object 


        const { name, role, image } = member
        /* console.log(name);
         console.log(role);
         console.log(image);
     */

        // - generate the card markup (function?)
        const CardMarkupString = generateCardMarkup(name, role, image)

        // console.log(CardMarkupString);


        //- append the card to the rowEl
        rowEl.insertAdjacentHTML('beforeend', CardMarkupString)
    }

}


// creo una funzione che posiziono in fondo al codice per snellire il codice della pagina e la invoco a riga 90 

function generateCardMarkup(name, role, image) {
    return `
            <div class="col">
                <div class="card">
                    <img src=${image} alt="" class="card-img-top">
                    <div class="card-body">
                        <h3 class="card-title">${name}</h3>
                        <div>${role}</div>
                    </div>
                </div>
            </div>
`
}

