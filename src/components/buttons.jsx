import React from 'react'

function buttons() {
    const cities =[
        {
            id:1,
            title: 'Hong Kong'
        },
        {
            id:2,
            title: 'Toronto'
        },
        {
            id:3,
            title: 'London'
        },
        {
            id:1,
            title: 'Taipei'
        },
        {
            id:5,
            title: 'Osaka'
        },
    ]
  return <div className="flex items-center justify-around my-8">
    {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
    ))}
  </div>
}

export default buttons