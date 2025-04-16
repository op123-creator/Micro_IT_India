const apiKey = "de02071901364fd8854163502250704"; // Your actual API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=de02071901364fd8854163502250704&q=London&days=1&aqi=no&alerts=no key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const result = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather icon" />
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch(() => {
      document.getElementById("weatherResult").innerHTML = "City not found!";
    });
}
