import React, { useContext}  from 'react';
import Form from './Form';
import {MyContext} from './Store'
import './App.css';



function App(props) {
  
  const { city, dispatch } = useContext(MyContext);
  return (
  <div className="Left">
    <div className="weather-form" style={style_weather_form}>
      <MyContext.Provider value={{ city, dispatch }}>
        {city.cityName && <Form/>}
      </MyContext.Provider>
    </div>
    <div className="weather-detail" style={style_weather_detail}>
      <p style={weather_detail_header}>Weather Details</p>
      {
        props.data.main === undefined ? null : Object.keys(props.data.main).map((key, index) => {
          return(
          <div style={ weather_detail_data } key={index}>
            <p>{key}</p>
            <p>{props.data.main[key]}</p>
          </div>
          )})}
    </div>
  </div>
  );
}

const style_weather_form={
  height: '15%',
  border: '0.5px solid yellow',
  borderRadius: '12px',
  width: '80%',
  margin: 'auto',
  color: 'white'
};

const style_weather_detail={
  height: '85%',
  width: '80%',
  color: 'white',
  overflowY: 'scroll',
};
const weather_detail_header = {
  textAlign: 'center',
  letterSpacing: '2px',
  margin: '30px 0',
};

const weather_detail_data={
  display: "flex",
  justifyContent: "space-around",
  marginBottom: '15px',
};

export default App;
