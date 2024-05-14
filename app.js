const cityForm = document.querySelector("form");
const weatherDetails = document.querySelector(".details");
const weatherCard = document.querySelector(".card");

// function to change the DOM
const updateUI = (data) => {
  const cityDetails = data.cityDetails;
  const weatherObject = data.weatherObject;

  weatherDetails.innerHTML = `
   <h5 class="my-3">${cityDetails.EnglishName}</h5>
          <div class="my-3">${weatherObject.WeatherText}</div>
          <div class="display-3 my-4">
            <span>${weatherObject.Temperature.Metric.Value}</span>
            <span>&deg; C</span>
          </div>    
          `;
};

const fetchWeatherData = async function (cityName) {
  try {
    const cityDetails = await getCity(cityName);
    const weatherObject = await getWeather(cityDetails["Key"]);

    return {
      cityDetails: cityDetails,
      weatherObject: weatherObject,
    };
  } catch (error) {
    console.log("Error in fetching the apis :", error);
  }
};

cityForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const cityName = cityForm.city.value.trim();

  fetchWeatherData(cityName)
    .then((data) => {
      updateUI(data);
      // console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  cityForm.reset();
});
