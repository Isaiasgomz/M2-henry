import React from 'react';

export default function Card(props) {
  // acá va tu código
  
  
  return (
    <div>
      <button onClick={props.OnClose}>X</button>
      <h4>{props.name}</h4>
      <div>
        <p>MAX</p>
        <p>{props.max}</p>
        <p>MIN</p>
        <p>{props.min}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='img'/>
    </div>
  )
};