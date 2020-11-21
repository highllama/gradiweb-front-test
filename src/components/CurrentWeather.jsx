import React from 'react'
//redux
import {useSelector} from 'react-redux'
//style
import '../assets/style/components/CurrentWeather.scss'


const CurrentWeather = () => {

  const store = useSelector(store => store.weatherDuck.Bogota)

  return store ? (
    <div className='CurrentWeather'>

      <div className='CurrentWeather__icon'>
       <img 
       src={`http://openweathermap.org/img/wn/${store.weather[0].icon}@2x.png`} 
       alt='weather icon'
       />
      </div>
      <div className='CurrentWeather__info'>
     <h2> {store.main.temp}<span>°C</span></h2>
      </div>
    </div>
  ) : <></>

}

export default CurrentWeather