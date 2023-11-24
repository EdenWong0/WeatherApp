import React from 'react';
import { formatToLocalTime, iconUrlFromCode } from '../forecast/weatherForecast';

import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";

function tempDetails({ weather: {
    details, icon, temp, feels_like, humidity, speed, sunrise, sunset, timezone, temp_max, temp_min
}}) {
    const formatTemperature = (value) => (value !== undefined ? value.toFixed() : 'N/A');

    return (
        <div>
            <div className="flex items-cneter justify-center py-6 text-xl text-cyan-200">
                <p>{details}</p>
            </div>

            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
                <p className="text-5xl">{`${formatTemperature(temp)}°C`}</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={30} className="mr-1" />
                        Real feel:
                        <span className="font-medium ml-1">{`${formatTemperature(feels_like)}°C`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={30} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">{`${formatTemperature(humidity)}%`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={30} className="mr-1" />
                        Wind:
                        <span className="font-medium ml-1">{`${formatTemperature(speed)}Km/h`}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <UilSun />
                <p className="font-light">
                    Rise: <span className="font-medium ml-1">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
                </p>
                <UilSunset />
                <p className="font-light">
                    Set: <span className="font-medium ml-1">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
                </p>
                <UilArrowUp />
                <p className="font-light">
                    High: <span className="font-medium ml-1">{`${formatTemperature(temp_max)}°C`}</span>
                </p>
                <UilArrowDown />
                <p className="font-light">
                    Low: <span className="font-medium ml-1">{`${formatTemperature(temp_min)}°C`}</span>
                </p>
            </div>
        </div>
    );
}

export default tempDetails;
