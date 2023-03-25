import React from "react";
import { useState } from "react";

export default function TestForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    const change = text.toUpperCase();
    setText(change);
    props.showalert("text converted to uppercase" ,"success")
  };
  const handleOnChange = function (event) {
    setText(event.target.value);
  };
  const handleLowClick=()=>{
    const change2 = text.toLowerCase();
    setText(change2);
    props.showalert("text changes to lowercase","success")
  }
  const handleCopy=()=>{
     var text = document.querySelector("#myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
  }
  const handleDelete=()=>{
      setText(' ')
  }

  return (
    <>

      <div className="container"  style={{color:props.Mode==="light"?"black":"white"}}>
        <h1>{props.Heading}</h1>
        <div className="mb-3 my-3">
          <textarea style={{color:props.Mode==="light"?"black":"white",backgroundColor:props.Mode==="light"?"white":"gray"}}
            className="form-control center"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className ="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
         <button className ="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
         <button className ="btn btn-primary mx-2" onClick={handleDelete}>Delete Text</button>
      </div>
      <div className="container my-3"  style={{color:props.Mode==="light"?"black":"white"}}>
        <h2 >Your Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{text.split(" ").length*0.008} Minutes To Read</p>
        <h2>Overview</h2>
        <p>{text.length>1?text:"write something in textbox above"}</p>
      </div>
    </>
  );
}
