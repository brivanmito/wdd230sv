const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const textActivities = document.querySelector("h2");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		modeButton.textContent = "🔆";
		textActivities.style.color = "#f1a208";

	} else {
		body.style.background = "white";
		body.style.color = "#000";
		modeButton.textContent = "🕶️";

	}

});