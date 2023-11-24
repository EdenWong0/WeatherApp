import React from 'react';
import { iconUrlFromCode } from '../forecast/weatherForecast';

function hForecast({ title, items }) {
  // Ensure that items is an array, or default to an empty array
  const forecastItems = Array.isArray(items) ? items : [];

  return (
    <div>
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {forecastItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} className="w-12 my-1" alt="" />
            <p className="font-medium">{`${item.temp.toFixed()}°C`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default hForecast;
