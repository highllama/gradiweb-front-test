import React from 'react'

//style
import '../assets/style/components/BigWeatherCard.scss'


const BigWeatherCard = ({icon, temp, city, humidity,windSpeed,windDir}) => {

  return (
    <div  className='BigWeatherCard'>
      <div className='BigWeatherCard__container'>
      <div className='BigWeatherCard__icon'>
      <img 
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      alt='weather icon'  
      />
      </div>
      <div className='BigWeatherCard__main'>
        <div>
        <h2>{Number.parseFloat(temp).toFixed(0)}<span>°C</span></h2>
        </div>
        <div>
          <h4>{city}</h4>
        </div>
      </div>
      </div>
      
      <div className='BigWeatherCard__windInfo'>
        <span>Humidity {humidity}%</span>{'  '}
        <span>{windSpeed} km/h</span>
      </div>
      
      
    </div>
  )
}

export default BigWeatherCard