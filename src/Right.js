import React, { useContext}  from 'react'
import Form from './Form';
import {MyContext} from './Store'
import './App.css'



function App(props) {
  
  const { city, dispatch } = useContext(MyContext);
  return (
  <div className="Right">
    <div className="weather-form">
      <MyContext.Provider value={{ city, dispatch }}>
        {city.cityName && <Form/>}
      </MyContext.Provider>
    </div>
    <div className="weather-detail">
      <p className = "weather_detail_header">Weather Details</p>
      {
        props.data.main === undefined ? null : Object.keys(props.data.main).map((key, index) => {
          return(
          <div className = "weather_detail_data" key={index}>
            <p>{key}</p>
            <p>{props.data.main[key]}</p>
          </div>
          )})}
    </div>
  </div>
  );
}

export default App
