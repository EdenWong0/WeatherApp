import './App.css';
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Buttons from "./components/buttons";
import Inputs from "./components/inputs";
import LocationAndTime from "./components/locationAndtime";
import Temperature from "./components/tempDetails";
import HourlyForecast from "./components/hForecast";
import getFormattedWeatherData from './forecast/weatherForecast';
import { useEffect, useState } from 'react';


function App() {

  const [query, setQuery] = useState({q: "toronto"})
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({...query, units}).then(data => {
        setWeather(data);
      });
    }
    fetchWeather();
  }, [query, units])


  return (
    <div className="mx-auto max-w-screen-md mt -4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <Buttons />
      <Inputs />

      {weather && (
        <div>
          <LocationAndTime weather={weather}/>
          <Temperature weather={weather}/>


          <HourlyForecast title="hourly forecast"/>
          <HourlyForecast title="daily forecast"/>
        </div>
      )}
    </div>
  );
}

export default App;
