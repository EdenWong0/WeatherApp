import React from 'react';

function Buttons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: 'Toronto'
    },
    {
      id: 2,
      title: 'Montreal'
    },
    {
      id: 3,
      title: 'Vancouver'
    },
    {
      id: 4,
      title: 'Winnipeg'
    },
    {
      id: 5,
      title: 'Ottawa'
    },
    {
        id: 6,
        title: 'Hong Kong' 
    },
    {
        id: 7,
        title: 'Tokyo' 
    },
    {
        id: 8,
        title: 'Bangkok' 
    },
    {
        id: 9,
        title: 'Perth' 
    },
  ];

  return (
    <div className="flex items-center justify-around my-8">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium" onClick={() => setQuery({ q: city.title })}>
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
