const key = "81vSPABSdboGiXbdDHNAMiNP9SMF4ALW";

getWeather = async function (cityCode) {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/${cityCode}`;
  const query = `?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0]; //adding the index because data is an array that has one object that we need
  
};

const getCity = async function (city) {
  const baseURL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];
};

// getCity(cityName)
//   .then((data) => {
//     return getWeather(data);
//   }).then((data)=>{
//     console.log(data);
//   })
//   .catch(() => console.log("Error"));

