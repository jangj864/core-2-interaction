function fetchAirQualityAndWeatherData() {
    const latitude = 52.40001; // 위도
    const longitude = 13.600006; // 경도
    const airQualityURL = `https://api.open-meteo.com/v1/airquality?latitude=${latitude}&longitude=${longitude}`;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=1ced56361485dba64a972cfb589add52`;

    // 공기 질 데이터 가져오기
    fetch(airQualityURL)
        .then(response => response.json())
        .then(data => {
            const airQualityData = {
                ozone: data.current.ozone, // 오존 데이터
                co: data.current.carbon_monoxide // 일산화탄소 데이터
            };
            updatePageWithAirQualityData(airQualityData);
        })
        .catch(error => console.error('에어퀼리티 데이터 가져오는 중 오류 발생:', error));
    
    // 날씨 데이터 가져오기
    fetch(weatherURL)
        .then(response => response.json())
        .then(data => {
            const weatherData = {
                temperature: data.main.temp, // 온도
                humidity: data.main.humidity // 상대습도
            };
            updatePageWithWeatherData(weatherData);
        })
        .catch(error => console.error('날씨 데이터 가져오는 중 오류 발생:', error));
}

// 페이지에 공기 질 데이터를 업데이트하는 함수
function updatePageWithAirQualityData(data) {
    document.getElementById('ozone').textContent = `${data.ozone} ppb`;
    document.getElementById('co').textContent = `${data.co} μg/m³`; 
}

// 페이지에 날씨 데이터를 업데이트하는 함수
function updatePageWithWeatherData(data) {
    document.getElementById('temperature').textContent = `${data.temperature}°C`;
    document.getElementById('humidity').textContent = `${data.humidity}%`;
}

// 문서가 로드되면 공기 질 데이터와 날씨 데이터를 가져와서 페이지 업데이트
document.addEventListener('DOMContentLoaded', function() {
    fetchAirQualityAndWeatherData();
});
