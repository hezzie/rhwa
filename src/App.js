import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import './App.css';
import Right from './Right';
import Left from './Left';
import './index.css'
import {initialState, reducer, MyContext} from './Store'



const App = () => {
  const [city, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState([])
  const [cord, setCord] = useState('')

  var options = {
    enableHighAccuracy: true,
    timeout: 5000
  };
  
  function success(pos) {
    var crd = pos.coords;
  setCord({
    lat: crd.latitude,
    long:crd.longitude,
    accuracy:crd.accuracy
  })
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  const cccc = city.cityName === "noCity" ? `lat=${cord.lat}&lon=${cord.long}` : `q=${city.cityName}`
useEffect(()=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?${cccc}&APPID=7f6a0fe6f25df85a9176f605964e2fb0`)
    .then( (response) => {
      setData(response.data)
    })
    .catch( (error) => {
      console.log(error);
    })
    .finally(() => {
    })
  
  }, [cccc])

  return(
  <div className="App">
    <MyContext.Provider value={{ city, dispatch }}>
    <Left data={data} />
      <Right data={data}/>
      
    </MyContext.Provider>
  </div>
      )
}

export default App