const baseURL = "https://brivanmito.github.io/wdd230sv/";
const linksURL = "https://brivanmito.github.io/wdd230sv/data/links.json";
const listActivity = document.querySelector("#listLinks");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}


const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let listItem = document.createElement('li');

        listItem.textContent = `${week.lesson}: `;

        week.links.forEach((link, index) => {
            let linkE = document.createElement('a');

            linkE.setAttribute('href', link.url);
            linkE.setAttribute('target', '_blank');
            linkE.textContent = link.title;
            listItem.appendChild(linkE);

            if(index < week.links.length -1) {
                listItem.innerHTML += ' | ';
            }
        });
        listActivity.appendChild(listItem);

    });
};

getLinks();