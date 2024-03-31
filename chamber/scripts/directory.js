const url = 'https://brivanmito.github.io/wdd230sv/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.members);
}

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('span');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');
        let membershipLevel = document.createElement('p');
        
        card.setAttribute('class', 'toggle')
        name.textContent = company.name;
        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone: ${company.phonenumber}`;
        website.textContent = `Website: ${company.website}`;
        website.setAttribute('href', company.website);
        image.setAttribute('src', company.icon);
        image.setAttribute('alt', `${company.name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '100');
        membershipLevel.textContent = `Membership: ${company.membershiplevel}`;
        

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);
    

        cards.appendChild(card);
    });
}

getCompanyData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}