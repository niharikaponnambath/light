import logo from './logo.svg';
import './App.css';
import on from './images/orange.png';
import off from "./images/white.png";
import React,{useState} from 'react';

const App =()=>{
  const [toggle,settoggle] =useState(false)
  const togglebutton =()=>{
    settoggle(!toggle)
  }
  return(
    <div align="center">
      <img src={toggle?on:off} className='w-4 mt-2'/>
      <button onClick ={togglebutton}>{toggle?'on':'off'}</button>
    </div>
  )
}

export default App;
