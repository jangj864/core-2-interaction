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

var descriptions = {
    wind: "The entire text shakes depending on the Wind Speed. As the Wind Speed increases, the shaking speed faster.",
    precip: "The amount of blue water visible on the page varies with precipitation. As precipitation increases, the water level rises, filling the page.",
    humid: "Depending on the level of Humidity, moisture accumulates on the page. As the Humidity rises, a hazy moisture fills the page.",
    temp: "The color of the text changes depending on the Temperature. They are White, Pale Yellow, Yellow, Orange, and Red."
};

// 활성화된 데이터 타입을 추적하는 변수
var activeDataType = 'wind';

// 데이터 타입에 따라 설명과 인디케이터 업데이트
function updateText(type) {
    var description = descriptions[type];
    document.getElementById("descriptionText").innerHTML = description;
    document.getElementById("dataTitle").innerHTML = type.toUpperCase();
    updateIndicators(type);
    highlightDataPoint(type);
    activeDataType = type;
}

// 화살표 클릭 핸들러
function nextData() {
    var dataTypes = Object.keys(descriptions);
    var currentIndex = dataTypes.indexOf(activeDataType);
    var nextIndex = (currentIndex + 1) % dataTypes.length;
    updateText(dataTypes[nextIndex]);
}

function previousData() {
    var dataTypes = Object.keys(descriptions);
    var currentIndex = dataTypes.indexOf(activeDataType);
    var previousIndex = (currentIndex - 1 + dataTypes.length) % dataTypes.length;
    updateText(dataTypes[previousIndex]);
}

// 인디케이터 업데이트 함수
function updateIndicators(activeType) {
    var indicators = document.querySelectorAll('.indicators .dot');
    indicators.forEach(function(indicator, index) {
        if (Object.keys(descriptions)[index] === activeType) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// 선택된 데이터 포인트 하이라이트 함수
function highlightDataPoint(type) {
    var dataRows = document.querySelectorAll('#climateData .data-row');
    dataRows.forEach(function(dataRow) {
        if (dataRow.getAttribute('data-type') === type) {
            dataRow.classList.add('active');
        } else {
            dataRow.classList.remove('active');
        }
    });
}

// 데이터 행에 data-type 속성을 추가하는 초기화 함수
function initDataRows() {
    var dataRows = document.querySelectorAll('#climateData .data-row');
    dataRows.forEach(function(dataRow, index) {
        dataRow.setAttribute('data-type', Object.keys(descriptions)[index]);
        dataRow.addEventListener('click', function() {
            updateText(this.getAttribute('data-type'));
        });
    });
}

// 페이지 로드시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initDataRows();
    updateText(activeDataType); // 기본 활성화된 데이터 타입으로 초기화
});



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
