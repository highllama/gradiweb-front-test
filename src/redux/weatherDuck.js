// constantes
const dataInicial = {
    weather : []
}

// types
const GET_WEATHER = 'GET_WEATHER'
const GET_WEATHER_CURRENT = 'GET_WEATHER_CURRENT'

// reducer
export default function reducer(state = dataInicial, action){
  switch(action.type){
        case GET_WEATHER:
            return {...state, weather: action.payload}
        case GET_WEATHER_CURRENT:
            return {...state,[action.payload.city]: action.payload.data}
        default:
            return state
    }
}

// actions
export const getWeatherForecast = () =>  (dispatch) => {
  //api.openweathermap.org/data/2.5/weather?lat=4&lon=4&appid=ce43f41151b538536f9baa4eef1abff1
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Bogota&units=metric&appid=ce43f41151b538536f9baa4eef1abff1`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: GET_WEATHER,
        payload: data,
      })
    )
    .catch((err) => console.log(err))
}

export const getWeather = (city) =>  (dispatch) => {
  //api.openweathermap.org/data/2.5/weather?lat=4&lon=4&appid=ce43f41151b538536f9baa4eef1abff1
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ce43f41151b538536f9baa4eef1abff1`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: GET_WEATHER_CURRENT,
        payload: {data,city},
      })
    )
    .catch((err) => console.log(err))
}