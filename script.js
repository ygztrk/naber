document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    fetchWeather();
    fetchExchangeRates();
});

function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    setInterval(() => {
        const now = new Date();
        datetimeElement.textContent = now.toLocaleString('tr-TR', {
            dateStyle: 'full',
            timeStyle: 'medium'
        });
    }, 1000);
}

function fetchWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const city = 'Istanbul';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherElement = document.getElementById('weather');
            weatherElement.textContent = `Hava Durumu: ${data.weather[0].description}, Sıcaklık: ${data.main.temp}°C`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function fetchExchangeRates() {
    const url = 'https://api.exchangerate-api.com/v4/latest/USD';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const exchangeRatesElement = document.getElementById('exchange-rates');
            const euroRate = data.rates.EUR;
            const usdRate = data.rates.TRY;
            exchangeRatesElement.innerHTML = `Günlük Kur:<br>1 USD = ${usdRate} TRY<br>1 EUR = ${euroRate} USD`;
        })
        .catch(error => console.error('Error fetching exchange rate data:', error));
}
