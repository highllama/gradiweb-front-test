import React from 'react'
//components
import SmallForecastCard from './SmallForecastCard'
//redux
import {useSelector} from 'react-redux'
//style
import '../assets/style/components/ThreeDayForecast.scss'

const ThreeDayForecast = ( )=> {
  
  const formatDate = (date) => {
  let options = { weekday: 'long'};
    let newDate = new Date(date)
    return (new Intl.DateTimeFormat('en-US', options).format(newDate))
  }

  let oneDay, twoDays ,threeDays
  const store = useSelector(store => store.weatherDuck.weather)
  
  if(store.list){
     oneDay = store.list[4] 
     twoDays = store.list[12]
     threeDays = store.list[20]

  }

  return (
    <div className='ThreeDayForecast'>
      <h2><strong>3 Days </strong>Forecast</h2>
      {
        store.list ? (
          <>
      <SmallForecastCard 
      icon={oneDay.weather[0].icon  } 
      status={oneDay.weather[0].main}
      t1={oneDay.main.temp_max} 
      t2={oneDay.main.temp_min}
      date={formatDate(oneDay.dt_txt)} 
      dark={true}

      />
      <SmallForecastCard 
      icon={twoDays.weather[0].icon} 
      status={twoDays.weather[0].main} 
      t1={twoDays.main.temp_max} 
      t2={twoDays.main.temp_min} 
      date={formatDate(twoDays.dt_txt)} 
       />
      
      <SmallForecastCard 
      icon={threeDays.weather[0].icon} 
      status={threeDays.weather[0].main}  
      t1={threeDays.main.temp_max} 
      t2={threeDays.main.temp_min} 
      date={formatDate(threeDays.dt_txt)} 
      />     
      </>
        ) : <></>

      }
    </div>
  )
}

export default ThreeDayForecast