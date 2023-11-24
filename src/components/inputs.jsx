import React, { useState } from "react";
import { UilSearchAlt, UilLocationPinAlt } from '@iconscout/react-unicons';

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== '') setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if(units !== selectedUnit) setUnits(selectedUnit);
  }

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Enter the city..."
          className="text-xl font-light p-2 w-full shadow-xl cap focus:outline-none"
        />
        <UilSearchAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-150" onClick={handleSearchClick} />
        <UilLocationPinAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-150" onClick={handleLocationClick} />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="celsius" className="text-white text-xl font-light transition ease-out hover:scale-150" onClick={handleUnitChange}>°C</button>
        <p className="text-xl text-white mx-2">-</p>
        <button name="fahrenheit" className="text-white text-xl font-light transition ease-out hover:scale-150" onClick={handleUnitChange}>°F</button>
      </div>
    </div>
  );
}

export default Inputs;
