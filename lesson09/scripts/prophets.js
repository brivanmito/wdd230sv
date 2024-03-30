const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}
const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthPlace = document.createElement('p');
        let birthdDate = document.createElement('p');
        let deathDate = document.createElement('p');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        //Build the p content out to show the prophet's full name
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        birthdDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        deathDate.textContent = `Date of death: ${prophet.death}`;

        if(prophet.death == null) {
            deathDate.textContent = `Actual President`;
        }

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', 'Portrair of ${prophet.name} ${prophet.lastname}');
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthdDate);
        card.appendChild(birthPlace);
        card.appendChild(deathDate);
        cards.appendChild(card);
    });
}

getProphetData();