import React from 'react'
import { UilSearchAlt, UilLocationPinAlt } from '@iconscout/react-unicons'

function inputs() {
  return(
    <div className="flex flex-row justify-center my-6">
    <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input type="text" placeholder="Enter the city..." className="text-xl font-light p-2 w-full shadow-xl cap focus:outline-none">
        </input>
        <UilSearchAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-150"/>
        <UilLocationPinAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-150"/>
    </div>
    <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="celsius" className="text-white text-xl font-light">°C</button>
        <p className="text-xl text-white mx-2">-</p>
        <button name="fahrenheit" className="text-white text-xl font-light">°F</button>
    </div>
  </div>
  );
}

export default inputs