import React from 'react'
//style
import '../assets/style/components/OtherLocations.scss'
//components
import BigWeatherCard from './BigWeatherCard'
//redux
import {useSelector} from 'react-redux'


const OtherLocations = () => {

  const store = useSelector(store => store.weatherDuck)
  const paris = store.Paris
  const lyon = store.Lyon

  return paris && lyon ? (
    <div className='OtherLocations'>
      <BigWeatherCard 
      temp={paris.main.temp} 
      icon={paris.weather[0].icon} 
      city={paris.name}
      windSpeed={paris.wind.speed}
      humidity={paris.main.humidity}
      />
      <BigWeatherCard 
      temp={lyon.main.temp} 
      icon={lyon.weather[0].icon} 
      city={lyon.name}
      windSpeed={lyon.wind.speed}
      humidity={lyon.main.humidity}
      />
      <div className='OtherLocations__addLocations'>
        <button>Add Locations</button>
        <img 
        width='250'
        src='https://images.vexels.com/media/users/3/128183/isolated/preview/9dfb13e1f746440c37db6f92b56af3c1-los-angeles-city-skyline-by-vexels.png'
        alt='sky' />
      </div>

    </div>
  ) : (<></>)
}

export default OtherLocations