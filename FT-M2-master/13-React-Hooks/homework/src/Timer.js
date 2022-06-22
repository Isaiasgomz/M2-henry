import React, {useState, useRef, useEffect} from 'react';
import './Timer.css'


const Timer = () => {
  const [time, setTime] = useState(0)
  const [active, setActive] = useState(false)
  const [type, setType] = useState('Contador')

  function toggle (){
    setActive(!active)
  } 

  function reset ( ){
    setTime(0)
    setActive(false)
  }

  function optionType (){
   type === 'Contador' ? setType('Cuenta Regresiva') : setType('Contador')
  }

  const myRef = useRef(null)

  function addSeconds (){
    let value = myRef.current.value
    setTime(value)
  }

  useEffect(() =>{
    let interval;
    if(active && type === 'Contador'){
      interval = setInterval(() =>
      setTime(prevState => prevState + 1),1000)}

    if(active && type === 'Cuneta Regresiva'){
      interval = setInterval(() => 
      setTime(prevState => prevState -1),1000)}

    if(!active && time !== 0 && type === 'Contador'){
      clearInterval(interval)
    }

    if(time === 0 && type === 'Cuenta Regresiva'){
      reset()
      clearInterval(interval)
    }

    return ()=> clearInterval(interval)
  },[active, time, type])

  return (
    <div className="app">
      <div className="time">
        {time}s
      </div>
      <div className="row">
        <button className="button-primary" onClick={toggle}>
          {active ? 'Pause' : 'Start'}
        </button>
        <button className="button-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={optionType}>
          {type}
      </button>
      {
        type === 'Cuenta Regresiva' && 
      <input onChange={addSeconds} ref={myRef} type="number" placeholder="Ingresa Segundos" autoComplete="off"/>
      }
    </div>
  );
};

export default Timer;