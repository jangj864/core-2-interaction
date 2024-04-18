function fetchWeatherData() {
    const latitude = 40.7128; // 뉴욕의 위도
    const longitude = -74.0060; // 뉴욕의 경도
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=1ced56361485dba64a972cfb589add52`;

    // 날씨 데이터 가져오기
    fetch(weatherURL)
        .then(response => response.json())
        .then(data => {
            const weatherData = {
                temperature: data.main.temp, // 온도
                humidity: data.main.humidity, // 상대습도
                windSpeed: data.wind.speed, // 바람 속도
                precipitation: data.rain ? data.rain['1h'] : 0 // 강수량 (1시간 동안), 없으면 0
            };
            updatePageWithWeatherData(weatherData);
        })
        .catch(error => console.error('날씨 데이터 가져오는 중 오류 발생:', error));
}

// 페이지에 날씨 데이터를 업데이트하는 함수
function updatePageWithWeatherData(data) {
    document.getElementById('temperature').textContent = `${data.temperature}°C`;
    document.getElementById('humidity').textContent = `${data.humidity}%`;
    document.getElementById('wind_speed').textContent = `${data.windSpeed} m/s`;
    document.getElementById('precipitation').textContent = `${data.precipitation} mm`;
}

// 문서가 로드되면 날씨 데이터를 가져와서 페이지 업데이트
document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData();
});

function scrollToclimateData() {
    const element = document.getElementById('climateData');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updatePageWithWeatherData(data) {
    document.getElementById('temperature').textContent = `${data.temperature}°C`;
    setColor('temperature', data.temperature, [15, 25], [10, 15, 25, 30], [5, 10, 30, 35], [0, 5, 35, 40], [-5, 40]);

    document.getElementById('humidity').textContent = `${data.humidity}%`;
    setColor('humidity', data.humidity, [30, 50], [50, 60], [60, 70], [70, 80], [80, 100]);

    document.getElementById('wind_speed').textContent = `${data.windSpeed} m/s`;
    setColor('wind_speed', data.windSpeed, [0, 10], [10, 15], [15, 20], [20, 25], [25, Infinity]);

    document.getElementById('precipitation').textContent = `${data.precipitation} mm`;
    setColor('precipitation', data.precipitation, [0], [0, 5], [5, 10], [10, 20], [20, Infinity]);
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

