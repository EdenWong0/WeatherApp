import React from 'react'

function buttons() {
    const cities =[
        {
            id:1,
            title: 'Toronto'
        },
        {
            id:2,
            title: 'Montreal'
        },
        {
            id:3,
            title: 'Vancouver'
        },
        {
            id:1,
            title: 'Winnipeg'
        },
        {
            id:5,
            title: 'Ottawa'
        },
    ]
  return <div className="flex items-center justify-around my-8">
    {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
    ))}
  </div>
}

export default buttons