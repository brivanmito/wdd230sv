const baseURL = "https://brivanmito.github.io/wdd230sv/";
const linksURL = "https://brivanmito.github.io/wdd230sv/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

getLinks();