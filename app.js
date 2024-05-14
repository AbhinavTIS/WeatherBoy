const cityForm = document.querySelector("form");
console.log(cityForm);

cityForm.addEventListener('submit',function(e) {
  e.preventDefault()

  const cityName = cityForm.city.value.trim()

  fetchWeatherData(cityName);
} )

