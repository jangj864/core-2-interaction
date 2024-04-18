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
