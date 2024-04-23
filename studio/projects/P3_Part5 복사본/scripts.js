function fetchWeatherData() {
    const latitude = 40.7128; // 뉴욕의 위도
    const longitude = -74.0060; // 뉴욕의 경도
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=1ced56361485dba64a972cfb589add52`;

    // 날씨 데이터를 가져옵니다.
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
        .catch(error => console.error('날씨 데이터를 가져오는 중 오류 발생:', error));
}

function updatePageWithWeatherData(data) {
    document.getElementById('temperature').textContent = `${data.temperature}°C`;
    document.getElementById('humidity').textContent = `${data.humidity}%`;
    document.getElementById('wind_speed').textContent = `${data.windSpeed} m/s`;
    document.getElementById('precipitation').textContent = `${data.precipitation} mm`;

    setColor('temperature', data.temperature, [15, 25], [10, 15, 25, 30], [5, 10, 30, 35], [0, 5, 35, 40], [-5, 40]);
    setColor('humidity', data.humidity, [30, 50], [50, 60], [60, 70], [70, 80], [80, 100]);
    setColor('wind_speed', data.windSpeed, [0, 10], [10, 15], [15, 20], [20, 25], [25, Infinity]);
    setColor('precipitation', data.precipitation, [0], [0, 5], [5, 10], [10, 20], [20, Infinity]);

    updateWaterLevel(data.precipitation);
    applyShakeEffect(data.windSpeed); // 바람 속도에 따라 효과 적용
}

function setColor(elementId, value, normalRange, lowRiskRange, moderateRiskRange, highRiskRange, veryHighRiskRange) {
    const element = document.getElementById(elementId);
    if (value >= normalRange[0] && value <= normalRange[1]) {
        element.className = 'normal';
    } else if (value >= lowRiskRange[0] && value <= lowRiskRange[1]) {
        element.className = 'low-risk';
    } else if (value >= moderateRiskRange[0] && value <= moderateRiskRange[1]) {
        element.className = 'moderate-risk';
    } else if (value >= highRiskRange[0] && value <= highRiskRange[1]) {
        element.className = 'high-risk';
    } else if (value >= veryHighRiskRange[0] && value <= veryHighRiskRange[1]) {
        element.className = 'very-high-risk';
    }
}

function updateWaterLevel(precipitation) {
    const overlay = document.getElementById('waterOverlay');
    if (precipitation <= 5) {
        overlay.style.height = '10%'; // 낮은 위험
    } else if (precipitation <= 10) {
        overlay.style.height = '25%'; // 중간 위험
    } else if (precipitation <= 20) {
        overlay.style.height = '50%'; // 높은 위험
    } else {
        overlay.style.height = '100%'; // 매우 높은 위험
    }
}

function applyShakeEffect(windSpeed) {
    console.log("Applying shake effect with wind speed:", windSpeed);  // 로그 추가
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

document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData();
});

function scrollToclimateData() {
    const element = document.getElementById('climateData');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

