const cityForm = document.querySelector("form");
console.log(cityForm);

cityForm.addEventListener('submit',function(e) {
  e.preventDefault()

  const cityName = cityForm.city.value.trim()

  fetchWeatherData(cityName);
} )


const fetchWeatherData= async function(cityName){
    try {
        const cityCode = await getCity(cityName)
        const weatherObject  = await getWeather(cityCode)
        console.log(weatherObject);
    } catch (error) {
        console.log('Error in fetching the apis :', error );
    }
}
