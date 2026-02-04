// # Prep 

// select the dom's node
const rowEl = document.getElementById('our-team')

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// loop over the array 

for (let i = 0; i < teamMembers.length; i++) {

  // - get the element for the current iteration 
  const member = teamMembers[i]
  //console.log(teamMembers[i]);

  // - DESTRUTTURO to create variables to hold values for each property of the object 
  const { name, role, email, img } = member
  //console.log(name, role, email, img);

  // - generate the card markup 
  const CardMarkupString = generateCardMarkup(name, role, email, img)
  console.log(CardMarkupString);

  //- append the card to the rowEl
  rowEl.insertAdjacentHTML('beforeend', CardMarkupString)

}

// creo una funzione che posiziono in fondo al codice per snellire il codice della pagina e la invoco a riga 90 

function generateCardMarkup(name, role, email, img) {

  return `
<div class="col">
                <div class="card">
                    <img src=${img} alt="" class="card-img-top">
                    <div class="card-body">
                        <h3 class="card-title">${name}</h3>
                        <div>${role}</div>
                        <div>${email}</div>
                </div>
            </div>
            `
}