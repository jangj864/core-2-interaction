var lat = 52.52;
var long = 13.41;
var URL = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${ lat }&longitude=${ long }&hourly=carbon_monoxide,nitrogen_dioxide,sulphur_dioxide&forecast_days=1`;

fetch(URL)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
		render(data);
	})

function render(data) {
	var dateObject = new Date();
	var hour = dateObject.getHours();	

	document.body.innerHTML = `
		<p>Hour: ${ hour }</p>
		<p>CO1: ${ data.hourly.carbon_monoxide[hour] }</p>
	`
}