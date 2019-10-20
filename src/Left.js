import React from 'react'
import './App.css'


function App(props) {

  const icon = props.data.weather === undefined ? "" :`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`

  const pp = props.data.weather === undefined ? "" :  props.data.weather[0].main
  


  const style = {
    backgroundImage:`url(${pp === "Rain" ? "https://media.giphy.com/media/Mgq7EMQUrhcvC/source.gif" :
     pp === "Clouds" ? "https://media.giphy.com/media/Cn46Wi1Fvh11S/source.gif" :
     pp === "Thunderstorms" ? "https://media.giphy.com/media/8xY1YYpEZ4dws/source.gif":
     pp === "Clear" ? "https://media.giphy.com/media/Te7h0uqGNo0CY/giphy.gif" :
      "https://www.animatedimages.org/data/media/148/animated-weather-image-0012.gif"})`,
  }
  return (
      <div className="Left"style={style}>
      
      <div className="left-bottom">


        <div className="temp">{props.data.main === undefined ? null : props.data.main.temp}</div>

        <div className="city-time">
          <div className="city">{props.data.name}</div>
          <div className="time">{props.data.timezone}</div>
        </div>

        <div className="icon-desc">
          <div className="icon">
          <img alt="icon" className="icon" src={icon}/>
          </div>
          <div className="desc">{props.data.weather === undefined ? "" : props.data.weather[0].main}</div>
        </div>



        </div>
        </div>
  );
}



export default App;
