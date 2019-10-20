import {createContext} from 'react'

const MyContext = createContext(null)

const initialState = {
  cityName: "noCity"
};

const reducer = ( action ) => {
    switch (action.type) {
      case "SET_CITY":
        return {
          cityName: action.cityName
        };
      default:
        return initialState;
    }
  }

export {reducer, initialState, MyContext}