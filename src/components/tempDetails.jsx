import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";


function tempDetails() {
  return (
    <div>
        <div className="flex items-cneter justify-center py-6 text-xl text-cyan-200">
            <p>Something</p>
        </div>

        <div className="flex flex-row items-center justify-between text-white py-3">
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Sunny" className="w-20"/>
            <p className="text-5xl">34°C</p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-center">
                <UilTemperature size={30} className="mr-1" />
                Real fell:
                <span className="font-medium ml-1">34°C</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                <UilTear size={30} className="mr-1" />
                Humidity:
                <span className="font-medium ml-1">30%</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                <UilWind size={30} className="mr-1" />
                Wind:
                <span className="font-medium ml-1">15 Km/h</span>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
            Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <UilSunset />
        <p className="font-light">
            Set: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <UilArrowUp />
        <p className="font-light">
            Hight: <span className="font-medium ml-1">50°C</span>
        </p>
        <UilArrowDown />
        <p className="font-light">
            Low: <span className="font-medium ml-1">100°C</span>
        </p>
        </div>
    </div>
  )
}

export default tempDetails