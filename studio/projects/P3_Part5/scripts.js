document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData();
});

function fetchWeatherData() {
    const latitude = 40.7128; // New York latitude
    const longitude = -74.0060; // New York longitude
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=1ced56361485dba64a972cfb589add52`;

    fetch(weatherURL)
        .then(response => response.json())
        .then(data => {
            const weatherData = {
                temperature: data.main.temp,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                precipitation: data.rain ? data.rain['1h'] : 0
            };
            updatePageWithWeatherData(weatherData);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function updatePageWithWeatherData(data) {
    document.getElementById('temperature').textContent = `${data.temperature}°C`;
    document.getElementById('humidity').textContent = `${data.humidity}%`;
    document.getElementById('wind_speed').textContent = `${data.windSpeed} m/s`;
    document.getElementById('precipitation').textContent = `${data.precipitation} mm`;

    updateContentAreaColor(data.temperature);
    updateWaterLevel(data.precipitation);
    applyShakeEffect(data.windSpeed);
}

function updateContentAreaColor(temperature) {
    const contentArea = document.getElementById('contentArea');
    if (!contentArea) {
        console.error('The content area could not be found.');
        return;
    }

    let color;
    if (temperature < 10) {
        color = 'white'; // Cold
    } else if (temperature >= 10 && temperature < 20) {
        color = '#ffffe0'; // Cool
    } else if (temperature >= 20 && temperature < 30) {
        color = 'yellow'; // Normal
    } else if (temperature >= 30 && temperature < 40) {
        color = 'orange'; // Warm
    } else {
        color = 'red'; // Hot
    }
    contentArea.style.cssText = 'color: ' + color + ' !important;';
}

function updateWaterLevel(precipitation) {
    const overlay = document.getElementById('waterOverlay');
    overlay.style.height = precipitation <= 5 ? '10%' :
                           precipitation <= 10 ? '25%' :
                           precipitation <= 20 ? '50%' : '100%';
}

function applyShakeEffect(windSpeed) {
    const contentElement = document.getElementById('mainContent');
    contentElement.classList.remove('shake-1', 'shake-2', 'shake-3', 'shake-4', 'shake-5');
    if (windSpeed > 0 && windSpeed <= 5) {
        contentElement.classList.add('shake-1');
    } else if (windSpeed > 5 && windSpeed <= 10) {
        contentElement.classList.add('shake-2');
    } else if (windSpeed > 10 && windSpeed <= 15) {
        contentElement.classList.add('shake-3');
    } else if (windSpeed > 15 && windSpeed <= 20) {
        contentElement.classList.add('shake-4');
    } else if (windSpeed > 20) {
        contentElement.classList.add('shake-5');
    }
}

function scrollToclimateData() {
    const element = document.getElementById('climateData');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
