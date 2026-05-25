async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "bd9f4e996300227b3677463be617ccac";

  console.log("City entered:", city);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data); // 🔥 This shows actual problem

  if (data.cod === 200) {
    document.getElementById("result").innerHTML =
      "Temperature: " + data.main.temp + "°C" +
      "<br>Weather: " + data.weather[0].main;
  } else {
    document.getElementById("result").innerHTML =
      "❌ Error: " + data.message;
  }
}