import React from 'react'
//components
import ThreeDayForecast from '../components/ThreeDayForecast'
import PlacesToVisit from '../components/PlacesToVisit'
import OtherLocations from '../components/OtherLocations'
//style
import '../assets/style/components/Forecast.scss'



const Forecast = ( )=> {

  return (
    <div className='wrapper Forecast'>
    <div className='Forecast__main'>
    <ThreeDayForecast />
    <PlacesToVisit />
    <OtherLocations />
    </div>
    </div>
  )
}

export default Forecast