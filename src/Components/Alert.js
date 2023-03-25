import React from 'react'

function Alert(props) {
    const capital=(text)=>{
        let word =text.toLowerCase();
        return word[0].toUpperCase()+word.slice(1);
    }
  return (
  props.Alert&&<div className={`alert alert-${props.Alert.type} style={{height:"200px"}} alert-dismissible fade show`} role="alert">
    <strong>{capital(props.Alert.type)}:</strong> {props.Alert.msg}

  </div>
  )
}

export default Alert
