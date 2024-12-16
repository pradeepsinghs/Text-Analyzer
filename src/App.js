
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {

  const [mode , setmode] = useState("light");
  const [alert , setalert] = useState(null);

  const showAlert = (message , type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
      
    }, 1500);

  }


  const changeMode = ()=>{
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "#31363F"
      showAlert("Dark Mode has beed Enabled", "success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has beed Enabled", "success")
    }
  }
  
  return (
    <>
    <Navbar mode = {mode} toggleBtn = {changeMode} />
    <Alerts alert = {alert}/>
    <div className="container my-5">
    <TextForm mode = {mode} alert={showAlert}/>
    </div>
    </>
  );
}

export default App;
