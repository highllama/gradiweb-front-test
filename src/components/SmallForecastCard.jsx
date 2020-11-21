import React from 'react'
//style
import '../assets/style/components/SmallForecastCard.scss'

const SmallForecastCard = ({icon, t1,t2,date, status, dark} )=> {

  return (
    <div className='SmallForecastCard'>
      <div>
      <img width='40' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather icon'/>
      </div>
      <div className='SmallForecastCard__info' >
        <h2>{date}</h2>
        <h3>{status}</h3>

      </div>
      <div style={{background: dark ? '#323386' : '', color: dark ? '#FFF' : ''}}  className='SmallForecastCard__temp' >
      {Number.parseFloat(t1).toFixed(0)}° / {Number.parseFloat(t2).toFixed(0)}°
      </div>
      
    </div>
  )
}

export default SmallForecastCard