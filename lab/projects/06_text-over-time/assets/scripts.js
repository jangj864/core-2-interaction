function getClimateData() {
    return new Promise(resolve => {
        setTimeout(() => {
            // Mock data
            resolve({
                ozone: 300, // Ozone level in Dobson Units
                co2: 415, // CO2 level in ppm
                waterVapor: 'Moderate', // Simplified representation of water vapor
                temperature: 35 // Temperature in Celsius
            });
        }, 1000);
    });
}

function updatePageClimate(data) {
    document.getElementById('ozone').textContent = `${data.ozone} DU`;
    document.getElementById('co2').textContent = `${data.co2} ppm`;
    document.getElementById('waterVapor').textContent = data.waterVapor;
    document.getElementById('temperature').textContent = `${data.temperature}°C`;
}

document.addEventListener('DOMContentLoaded', function() {
    getClimateData().then(updatePageClimate);
});
