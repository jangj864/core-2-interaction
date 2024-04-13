function fetchAirQualityAndWeatherData() {
    const latitude = 40.7128; // 뉴욕의 위도
    const longitude = -74.0060; // 뉴욕의 경도
    const airQualityURL = `https://api.open-meteo.com/v1/airquality?latitude=${latitude}&longitude=${longitude}`;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=1ced56361485dba64a972cfb589add52`;

    // 공기 질 데이터 가져오기
    fetch(airQualityURL)
        .then(response => response.json())
        .then(data => {
            // API 응답 구조에 따라 수정한 부분
            const airQualityData = {
                ozone: data.data.o3, // 오존 데이터, 수정됨
                co: data.data.co // 일산화탄소 데이터, 수정됨
            };
            updatePageWithAirQualityData(airQualityData);
        })
        .catch(error => console.error('Error fetching air quality data:', error));
    
    // 날씨 데이터 가져오기
    fetch(weatherURL)
        .then(response => response.json())
        .then(data => {
            const weatherData = {
                temperature: data.main.temp, // 온도
                humidity: data.main.humidity // 상대습도, 수증기의 대체 데이터로 사용 가능
            };
            updatePageWithWeatherData(weatherData);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// 페이지에 공기 질 데이터를 업데이트하는 함수
function updatePageWithAirQualityData(data) {
    document.getElementById('ozone').textContent = `${data.ozone} μg/m³`;
    document.getElementById('co').textContent = `${data.co} μg/m³`; // 일산화탄소(CO)를 올바른 섹션에 표시, 수정됨
}

// 페이지에 날씨 데이터를 업데이트하는 함수
function updatePageWithWeatherData(data) {
    document.getElementById('temperature').textContent = `${data.temperature}°C`;
    document.getElementById('waterVapor').textContent = `${data.humidity}%`;
}

// 문서가 로드되면 공기 질 데이터와 날씨 데이터를 가져와서 페이지 업데이트
document.addEventListener('DOMContentLoaded', function() {
    fetchAirQualityAndWeatherData();
});
