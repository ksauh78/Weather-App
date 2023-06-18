const apiKey = `2aa324236296348473e018c0675e6e4a`;
let valueCity = "";
let cityWeatherData = {};
const city = document.querySelector("#city");
const mainBody = document.querySelector("#mainBody");
document.addEventListener("keyup", (event) => {
  const keyPressed = event.key;
  if (keyPressed === "Enter") {
    valueCity = city.value;
    getWeatherData(valueCity);
  }
});

const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    response.json().then((data) => {
      console.log(data);
      mainBody.innerHTML = `<h3 class = "text-center display-6 mt-2">${data.name}</h1>
      <p class = "text-center mt-4" >Temp:${data.main.temp}</p>
      <p class = "text-center mt-4">Feels Like:${data.main.feels_like}</p>
      <p class = "text-center mt-3" style="font-size:20px; font-family: "Lucida Console", "Courier New", monospace; ">Description:${data.weather[0].description}</p>
      `;
    });
  } catch (error) {
    console.log(error);
  }
};
