import React from 'react'
import { UilSearchAlt, UilLocationPinAlt } from '@iconscout/react-unicons'

function inputs() {
  return(
    <div className="flex flex-row justify-center my-6">
    <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input type="text" placeholder="Enter the city..." className="text-xl font-light p-2 w-full shadow-xl cap focus:outline-none">
        </input>
        <UilSearchAlt/>
        <UilLocationPinAlt/>
    </div>
  </div>
  );
}

export default inputs