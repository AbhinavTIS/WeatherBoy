const cityForm = document.querySelector("form");
console.log(cityForm);

const fetchWeatherData = async function (cityName) {
    try {
      const cityCode = await getCity(cityName);
      const weatherObject = await getWeather(cityCode);
        
      return {
        cityCode : cityCode,
        weatherObject : weatherObject
      }

    } catch (error) {
      console.log("Error in fetching the apis :", error);
    }
  };


cityForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const cityName = cityForm.city.value.trim();

  fetchWeatherData(cityName)
  .then( (data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })

  cityForm.reset()
});


