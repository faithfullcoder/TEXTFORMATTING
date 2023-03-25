import React ,{useState} from 'react'

export default function About() {
    const[myStyle,changeStyle]=useState({color:'white',
    backgroundColor:'black'})
    const[btntext,changebtntext]=useState("light Mode")
    const switchMode=()=>{
      if(myStyle.color === 'white'){
          changeStyle({
             color:'black',
             backgroundColor:'white'
          })
          changebtntext("Dark Mode")
      }
      else{
        changeStyle({
            color:'white',
            backgroundColor:'black'
        })
        changebtntext("Light Mode")
      }
    }
  return (
    <div className="container" >
<div className="list-group" style={myStyle}>
    <button type="button"  style={myStyle} className="list-group-item list-group-item-action " aria-current="true">
      The current button
    </button>
    <button type="button" className="list-group-item list-group-item-action" style={myStyle}>A second button item</button>
    <button type="button" className="list-group-item list-group-item-action" style={myStyle}>A third button item</button>
    <button type="button" className="list-group-item list-group-item-action" style={myStyle}>A fourth button item</button>
    <button type="button" className="list-group-item list-group-item-action" style={myStyle}>A disabled button item</button>
  </div>
  <div className="container my-2">
  <button onClick={switchMode}>{btntext}</button>
  </div>

    </div>

  )
}
