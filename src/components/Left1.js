import React from "react";
import Nav from "./Nav";
import timeConverter from '../helpers/Helpers'

const Left = props => {
  const icon =
    props.data.list === undefined
      ? ""
      : `http://openweathermap.org/img/w/${props.data.list[8].weather[0].icon}.png`;

  return (
    <div className="Left">
      <Nav />
      <div className="left-bottom">
        <div className="temp">
          {props.data.list === undefined ? null : props.data.list[8].main.temp}
        </div>

        <div className="city-time">
          <div className="city">
            {props.data.list === undefined ? null : props.data.city.name}
          </div>
          <div className="time">
            {props.data.list === undefined ? null : timeConverter(props.data.list[8].dt)}
          </div>
        </div>

        <div className="icon-desc">
          <div className="icon">
            <img alt="icon" className="icon" src={icon} />
          </div>
          <div className="desc">
            {props.data.list === undefined
              ? ""
              : props.data.list[8].weather[0].main}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
