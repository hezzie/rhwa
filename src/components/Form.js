import React, { useContext, useState } from "react";
import { MyContext } from "../store/Store";

const Form = props => {
  const [_city, setCity] = useState("");
  const { dispatch } = useContext(MyContext);

  return (
    <div className="input">
      <input
        type="text"
        placeholder="city name"
        value={_city}
        onChange={e => setCity(e.target.value)}
      />
      <button
        type="submit"
        className="btn"
        onClick={() => dispatch({ type: "SET_CITY", cityName: _city })}
      >
        submit
      </button>
      {props.recentCities.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Form;
