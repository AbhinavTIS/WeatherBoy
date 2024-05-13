const key ='81vSPABSdboGiXbdDHNAMiNP9SMF4ALW'

const getCity = async function(city) {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?${key}&q=${city}`

    const response = await fetch(baseURL+query) 
    const data = await response.json()

    console.log(data);
} 


getCity('london')