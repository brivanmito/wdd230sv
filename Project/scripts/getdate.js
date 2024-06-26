document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    let currentYear = new Date().getFullYear();

    // Update the copyright year in the footer's first paragraph
    document.querySelector('footer p:last-child').innerHTML = `&copy; ${currentYear} <span id="currentYear"></span> Bryan`;
    // Get the last modified date of the document
    let lastModified = new Date(document.lastModified);

    // Get the element with the ID "lastModified"
    let lastModifiedElement = document.getElementById('lastModified');

    // Format the date to a readable string
    let formattedDate = lastModified.toLocaleString();

    // Update the element's content with the formatted date
    lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;
});



const resize = () => {
    let textLabe = document.querySelector(".heroLabel > p");
    if(innerWidth >= 0 && innerWidth <= 400) {
        textLabe.innerText = "Small View";
    } else if (innerWidth >= 400 && innerWidth <= 960) {
        textLabe.innerText = "Medium view";
    } else {
        textLabe.innerText = "Large view";
    }
}

addEventListener('resize', resize);
addEventListener('DOMContentLoaded', resize);