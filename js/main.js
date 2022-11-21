
// Creare l’array di oggetti con le informazioni fornite.
const teamMembers = [
  {
    "name": "Wayne Barnett",
    "role": "Founder & CEO",
    "avatar": "./img/wayne-barnett-founder-ceo.jpg",
    "altTxt": "Image of the Founder & CEO"

  },
  {
    "name": "Angela Caroll",
    "role": "Chief Editor",
    "avatar": "./img/angela-caroll-chief-editor.jpg",
    "altTxt": "Image of the Chief Editor"
  },
  {
    "name": "Walter Gordon",
    "role": "Office Manager",
    "avatar": "./img/walter-gordon-office-manager.jpg",
    "altTxt": "Image of the Office Manager"
  },
  {
    "name": "Angela Lopez",
    "role": "Social Media Manager",
    "avatar": "./img/angela-lopez-social-media-manager.jpg",
    "altTxt": "Image of the Social Media Manager"
  },
  {
    "name": "Scott Estrada",
    "role": "Developer",
    "avatar": "./img/scott-estrada-developer.jpg",
    "altTxt": "Image of the Developer"
  },
  {
    "name": "Barbara Ramos",
    "role": "Graphic Designer",
    "avatar": "./img/barbara-ramos-graphic-designer.jpg",
    "altTxt": "Image of the Graphic Designer"
  }
];
console.table(teamMembers);


// Stampare in console attraverso ciclo for-in le proprietà dell'oggetto
for (const info in teamMembers) {
  if (teamMembers.hasOwnProperty.call(teamMembers, info)) {
    const element = teamMembers[info];
    console.log(element);
  }
};



// Stampare nel DOM
for (let i = 0; i < teamMembers.length; i++) {
  let cardElements =
    `
  <div class="card text-center px-0" style="width: 18rem;">
  <img src="${teamMembers[i].avatar}" class="card-img-top" alt="${teamMembers[i].altTxt}">
  <div class="card-body">
  <h5 class="card-title">
  ${teamMembers[i].name}
  </h5>
  <p class="card-text">
  ${teamMembers[i].role}
  </p>
  </div>
  `

  const row = document.querySelector(".ms_cont").innerHTML += cardElements;
};

