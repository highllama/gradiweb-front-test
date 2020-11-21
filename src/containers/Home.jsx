import React, {useEffect} from 'react'
//redux
import {useDispatch} from 'react-redux'
import {getWeatherForecast, getWeather} from '../redux/weatherDuck'
//components
import Hero from '../components/Hero'
import CurrentWeather from '../components/CurrentWeather'
import Forecast from './Forecast'


const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(getWeatherForecast())
  dispatch(getWeather('Bogota'))
  dispatch(getWeather('Lyon'))
  dispatch(getWeather('Paris'))
  },[])

  return(
    <div>
      <Hero />
      <CurrentWeather />
      <Forecast />
    </div>
  )



}

export default Home