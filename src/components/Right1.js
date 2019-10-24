import React from "react";
import Form from "./Form";

const Right = props => {
  return (
    <div className="Right">
      <div className="weather-form">
        <Form recentCities={props.recentCities} />
      </div>
      <div className="weather-detail">
        <p className="weather_detail_header">Weather Details T</p>
        {props.data.list === undefined
          ? null
          : Object.keys(props.data.list[8].main).map((key, index) => {
              return (
                <div className="weather_detail_data" key={index}>
                  <p>{key}</p>
                  <p>{props.data.list[8].main[key]}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Right;
