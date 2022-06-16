import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.card}>
      <button onClick={props.OnClose} className={`${s.btn} ${s.btnColor}`}>X</button>
      <h4>{props.name}</h4>
      <div className={s.middleDiv}>
        
        <p>MAX</p>
        <p>{props.max}</p>
     
        <p>MIN</p>
        <p>{props.min}</p>
       
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='img'/>
    </div>
  )
}