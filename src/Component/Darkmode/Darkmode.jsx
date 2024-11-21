import React from 'react'
import  Sun from'../../assets/sun.png'
import Moon from '../../assets/moon.png'
import './DarkMode.css'


const Darkmode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark")
    localStorage.setItem("selectedTheme", "dark")
  };


  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "Light")
    localStorage.setItem("selectedTheme","Light")
  };


const selectedTheme = localStorage.getItem("selectedTheme")
if(selectedTheme ==="Light") {
  setLightTheme()
} else {
  setDarkTheme();
}
  const toggleTheme = (e) => {
    if(e.target.checked) { 
      setDarkTheme()
    } else {
      setLightTheme
    }
  };

  return (

<div className=''>
    <input type="checkbox" id="darkmode-toggle" onChange={toggleTheme}  defaultChecked={selectedTheme !== "Light"}/>
    <label htmlFor="darkmode-toggle" className='dark_mode_label'>
        <img src={Sun} className='sun' alt="" />
        <img src={Moon} className='moon' alt="" />
    </label>
    </div>
  )
}

export default Darkmode 