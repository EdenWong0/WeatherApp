import React, { useEffect, useState } from 'react';
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import Header from './components/header';
import Buttons from './components/buttons';
import Inputs from './components/inputs';
import LocationAndTime from './components/locationAndtime';
import Temperature from './components/tempDetails';
import HourlyForecast from './components/hForecast';
import getFormattedWeatherData from './forecast/weatherForecast';

function App() {
  const [query, setQuery] = useState({ q: 'toronto' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-700 to-blue-700'
    const threshold = units === 'celsius' ? 25 : 60
    if (weather.temp <= threshold) return 'from-cyan-700 to-blue-700'

    return 'from-yellow-700 to-orange-700'
  }

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <Header />
      <Buttons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
  
      {weather && (
        <div>
          <LocationAndTime weather={weather} />
          <Temperature weather={weather} />
        </div>
      )}
    </div>
  );
  
}

export default App;
