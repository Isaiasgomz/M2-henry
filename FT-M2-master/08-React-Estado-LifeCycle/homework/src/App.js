import React , {useState} from 'react';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.css';
import './App.css';


export default function App() {

  const [cities , setCities] = useState([])

  function onClose (id){
    setCities(oldCities => 
      oldCities.filter(c => c.id !== id))
  }

  function onSearch (city) {
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b'

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then( r => r.json()) 
    .then((recurso) => {
      if(recurso !== undefined){
        const city= {

          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.tem_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather:recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon

        };
        setCities(oldCities =>
          [...oldCities, city]) 
      }else{
        alert('Ciudad no encontrada')
      }
    })

    

    

  };

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>

    </div>
  );
};
