const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const textActivities = document.getElementsByTagName("h2");



modeButton.addEventListener("click", () => {
	var colorText = "";
	if (modeButton.textContent.includes("🕶️")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		modeButton.textContent = "🔆";
		colorText = "#f1a208";

	} else {
		body.style.background = "white";
		body.style.color = "#000";
		modeButton.textContent = "🕶️";
		colorText = "#003566";

	}
	for (var i=0;i<textActivities.length; i++) {
		textActivities[i].style.color = colorText;
	}

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