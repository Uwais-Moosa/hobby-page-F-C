document.addEventListener("DOMContentLoaded", function () {
	let currentDate = new Date();
	let dateOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	document.getElementById("date").innerText = currentDate.toLocaleDateString(
		"en-GB",
		dateOptions
	);
});
