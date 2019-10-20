import React, { useContext, useState} from 'react';
import './App.css';
import { MyContext } from './Store'

const UPDATE_USER = "UPDATE_USER";

function App() {

  const [_city, setCity] = useState('')
  const {dispatch } = useContext(MyContext);

  return (
  <div className="input">
    <input 
    type = "text"
    placeholder="city name"  
    value={_city} 
    onChange={e => setCity(e.target.value)}
    />
    <button
    type="submit" 
    className='btn'
    onClick = {() =>  dispatch({type: UPDATE_USER, cityName: _city})}>submit</button>
  </div>
  );
}


export default App;
