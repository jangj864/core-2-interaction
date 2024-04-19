var dateObject = new Date();
var year = dateObject.getFullYear();
var month = String(dateObject.getMonth()).padStart(2, '0');
var day = String(dateObject.getDay()).padStart(2, '0');
var URL = `https://climate-api.open-meteo.com/v1/climate?latitude=52.52&longitude=13.41&start_date=${ year }-${ month }-${ day }&end_date=${ year }-${ month }-${ day }&models=NICAM16_8S&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&daily=relative_humidity_2m_mean,relative_humidity_2m_max,relative_humidity_2m_min`;

fetch(URL)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})