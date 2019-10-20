import {createContext} from 'react';

const MyContext = createContext(null);

const UPDATE_USER = "UPDATE_USER";

const initialState = {
  cityName: "noCity"
};

  function reducer(state, action) {
    switch (action.type) {
      case UPDATE_USER:
        return {
          cityName: action.cityName
        };
      default:
        return initialState;
    }
  }

export {reducer, initialState, MyContext}