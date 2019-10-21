import React from 'react';
import Form from './Form';

const Right = (props) => {

  return (
  <div className="Right">
    <div className="weather-form" style={style_weather_form}>
      <Form/>
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

export default Right;
