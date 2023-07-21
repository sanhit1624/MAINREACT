// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#042743";
      showalert("Dark mode has been enabled", "success");
      document.title="Textutils-Dark mode";
      // setInterval(()=>{
      //   document.title="Textutils is amazing"
      // },2000)
      // setInterval(()=>{
      //   document.title="Install Textutils"
      // },1500)
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showalert("Light mode has been enabled", "success");
      document.title="Textutils-Light mode"
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="Textutils" abouttext="about textutils"/>
    <Navbar title="Textutils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyse below" mode={mode}/>}></Route>
      </Routes>
      <TextForm showalert={showalert} heading="Enter the text to analyse below" mode={mode}/>
      <About/>
    </div>
    </BrowserRouter>
    </>
  );
}
export default App;