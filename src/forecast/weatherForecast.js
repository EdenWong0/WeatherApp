 import { DateTime } from "luxon";
 
 const API_KEY = "37d51d1305367c38799cd04f7a4a7f20";
 const BASE_URL ="https://api.openweathermap.org/data/2.5"

 //https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&exclude=current,minutely,alerts&appid=37d51d1305367c38799cd04f7a4a7f20&units=metric

 const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid:API_KEY});

    return fetch(url)
    .then((res) => res.json())
 };

 const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed}; 
 };
 
const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;

    // Check if data contains nested daily and hourly properties
    if (data.data) {
        daily = (data.data.daily && Array.isArray(data.data.daily)) ? data.data.daily.slice(1, 6).map(d => {
            return {
                title: formatToLocalTime(d.dt, timezone, "ccc"),
                temp: d.temp.day,
                icon: d.weather[0].icon,
            };
        }) : [];

        hourly = (data.data.hourly && Array.isArray(data.data.hourly)) ? data.data.hourly.slice(1, 6).map(d => {
            return {
                title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
                temp: d.temp,
                icon: d.weather[0].icon,
            };
        }) : [];
    } else {
        // Use the original properties if there's no nesting
        daily = (daily && Array.isArray(daily)) ? daily.slice(1, 6).map(d => {
            return {
                title: formatToLocalTime(d.dt, timezone, "ccc"),
                temp: d.temp.day,
                icon: d.weather[0].icon,
            };
        }) : [];

        hourly = (hourly && Array.isArray(hourly)) ? hourly.slice(1, 6).map(d => {
            return {
                title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
                temp: d.temp,
                icon: d.weather[0].icon,
            };
        }) : [];
    }

    return { timezone, daily, hourly };
};

 

 const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        "weather",
        searchParams
    ).then(formatCurrentWeather);
    
    const {lat, lon} = formattedCurrentWeather

    const formattedForecastWeather = await getWeatherData("onecall", {
        lat, 
        lon, 
        exclude: 'current,minutely,alerts',
        units: searchParams.units
    }).then(formatForecastWeather)

    return{...formattedCurrentWeather, ...formatForecastWeather};
};

    const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a"
    ) =>  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

    const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

 export default getFormattedWeatherData

 export { formatToLocalTime, iconUrlFromCode };
