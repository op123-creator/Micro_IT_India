const apiKey = "de02071901364fd8854163502250704";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const output = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather icon">
      `;
      document.getElementById("weatherResult").innerHTML = output;
    })
    .catch(() => {
      document.getElementById("weatherResult").textContent = "City not found!";
    });
}
