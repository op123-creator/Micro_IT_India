const apiKey = "de02071901364fd8854163502250704"; // Your actual API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

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
