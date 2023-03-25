
import './App.css';
// import About from './Components/About';
import { Navbar } from './Components/Navbar';
import TestForm from './Components/TestForm';
import { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//    Routes
//   } from "react-router-dom";

function App() {
 const[mode,changeMode] =useState("light");
 const[alert,setalert] =useState(null);
 const showalert=(message,type)=>{
   setalert({
    msg:message,
    type:type
   })
   setTimeout(() => {
     setalert(null)
   }, 1000);
 }
  const ToggleMode=()=>{
    if(mode==="light"){
      changeMode("dark")
      document.querySelector("body").style.backgroundColor='gray';
      showalert("dark mode has enabled","success")
      document.title = "TextUtils ".concat(" ","Dark Mode") 

    }
    else {
      changeMode("light");
      document.querySelector("body").style.backgroundColor='white'
      showalert("light mode has enabled","success")
      document.title = "TextUtils ".concat(" ","Light Mode") 
    }
  }


  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText= "About" Mode={mode} ToggleMode={ToggleMode} />
     <Alert Alert={alert}/>

      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>} /> */}
          {/* <Route exact path="/" element={    <TestForm Heading="Enter Your Text Here"  Mode={mode} showalert={showalert}  />} /> */}
         {/* </Routes> */}
         <TestForm Heading="Enter Your Text Here"  Mode={mode} showalert={showalert}  />
      
{/* 
    </Router> */}
    </>
  );
}

export default App;
