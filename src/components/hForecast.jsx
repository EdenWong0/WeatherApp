import React from 'react'

function hForecast({title}) {
  return (
    <div>
        <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium up percase">{title}</p>
        </div>
        <hr className="my-2"/>
        <div className="flex flrx-row items-center justify-between text-white">
            <div className="flex flex-col itemscenter justify-center">
                <p className="font-light text-sm">10:10 PM</p>
                <img src="https://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt=""/>
                <p className="font-medium">22°C</p>
            </div>
            <div className="flex flex-col itemscenter justify-center">
                <p className="font-light text-sm">10:10 PM</p>
                <img src="https://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt=""/>
                <p className="font-medium">22°C</p>
            </div>
            <div className="flex flex-col itemscenter justify-center">
                <p className="font-light text-sm">10:10 PM</p>
                <img src="https://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt=""/>
                <p className="font-medium">22°C</p>
            </div>
            <div className="flex flex-col itemscenter justify-center">
                <p className="font-light text-sm">10:10 PM</p>
                <img src="https://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt=""/>
                <p className="font-medium">22°C</p>
            </div>
            <div className="flex flex-col itemscenter justify-center">
                <p className="font-light text-sm">10:10 PM</p>
                <img src="https://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt=""/>
                <p className="font-medium">22°C</p>
            </div>
            <div className="flex flex-col itemscenter justify-center">
                <p className="font-light text-sm">10:10 PM</p>
                <img src="https://openweathermap.org/img/wn/01d@2x.png" className="w-12 my-1" alt=""/>
                <p className="font-medium">22°C</p>
            </div>
        </div>
    </div>

  )
}

export default hForecast