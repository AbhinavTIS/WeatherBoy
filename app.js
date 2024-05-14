const cityForm = document.querySelector("form");
const weatherDetails = document.querySelector(".details");
const weatherCard = document.querySelector(".card");
const dayTimeImage = weatherCard.querySelector('img.time')
const iconImage = weatherCard.querySelector('#icon')

// function to change the DOM
const updateUI = (data) => {
  //   const cityDetails = data.cityDetails;
  //   const weatherObject = data.weatherObject;

  //destructure properties

  const { cityDetails, weatherObject } = data;
  console.log(data);

  weatherDetails.innerHTML = `
   <h5 class="my-3">${cityDetails.EnglishName}</h5>
          <div class="my-3">${weatherObject.WeatherText}</div>
          <div class="display-3 my-4">
            <span>${weatherObject.Temperature.Metric.Value}</span>
            <span>&deg; C</span>
          </div>    
          `;

  //update images and icons
  let timeSrc,iconSrc;
  let  weatherIcon = weatherObject.WeatherIcon 

  if(weatherObject.IsDayTime){
    timeSrc = 'img/day.svg'
  }else{
    timeSrc = 'img/night.svg'
  }

  iconSrc= `img/icons/${weatherIcon}.svg`

  dayTimeImage.src = timeSrc
  iconImage.src = iconSrc
  


  console.log(cityDetails,weatherObject);

  //remove d-none class for the card if present
  if (weatherCard.classList.contains("d-none")) {
    weatherCard.classList.remove("d-none");
  }
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
