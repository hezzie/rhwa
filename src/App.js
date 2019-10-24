import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Right from "./components/Right";
import Left from "./components/Left";
import Right1 from "./components/Right1";
import Left1 from "./components/Left1";
import Right2 from "./components/Right2";
import Left2 from "./components/Left2";
import Right3 from "./components/Right3";
import Left3 from "./components/Left3";
import Right4 from "./components/Right4";
import Left4 from "./components/Left4";
import "./index.css";
import { initialState, reducer, MyContext } from "./store/Store";

const App = () => {
  const [city, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState([]);
  const [cord, setCord] = useState("");
  const [recentCities, setRecentCities] = useState([]);

  var options = {
    enableHighAccuracy: true,
    timeout: 5000
  };

  const success = pos => {
    const crd = pos.coords;
    setCord({
      lat: crd.latitude,
      long: crd.longitude,
      accuracy: crd.accuracy
    });
  };

  const error = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);

  const currentLoc =
    city.cityName === "noCity"
      ? `lat=${cord.lat}&lon=${cord.long}`
      : `q=${city.cityName}`;
  useEffect(() => {
    if (city.cityName !== "noCity") {
      setRecentCities([city.cityName, ...recentCities]);
    }

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?${currentLoc}&APPID=7f6a0fe6f25df85a9176f605964e2fb0`
      )
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  }, [currentLoc]);
  const condition = data.list === undefined ? "" : data.list[0].weather[0].main;
  const style = {
    backgroundImage: `url(${
      condition === "Rain"
        ? "https://media.giphy.com/media/Mgq7EMQUrhcvC/source.gif"
        : condition === "Clouds"
        ? "https://media.giphy.com/media/Cn46Wi1Fvh11S/source.gif"
        : condition === "Thunderstorms"
        ? "https://media.giphy.com/media/8xY1YYpEZ4dws/source.gif"
        : condition === "Clear"
        ? "https://media.giphy.com/media/Te7h0uqGNo0CY/giphy.gif"
        : "https://media.giphy.com/media/29W8FBxzmGm52/giphy.gif"
    })`
  };
  console.log("=======>", data);
  return (
    <div className="App" style={style}>
      <Router>
        <MyContext.Provider value={{ city, dispatch }}>
          <Route exact path="/">
            <Left data={data} />
            <Right data={data} recentCities={recentCities} />
          </Route>
          <Route exact path="/1">
            <Left1 data={data} />
            <Right1 data={data} recentCities={recentCities} />
          </Route>
          <Route  path="/2">
            <Left2 data={data} />
            <Right2 data={data} recentCities={recentCities} />
          </Route>
          <Route  path="/3">
            <Left3 data={data} />
            <Right3 data={data} recentCities={recentCities} />
          </Route>
          <Route  path="/4">
            <Left4 data={data} />
            <Right4 data={data} recentCities={recentCities} />
          </Route>
        </MyContext.Provider>
      </Router>
    </div>
  );
};

export default App;
