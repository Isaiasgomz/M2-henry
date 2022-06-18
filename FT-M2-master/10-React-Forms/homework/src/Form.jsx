import React, {useState} from 'react';
import './index.css'


const validate = (input) => {
  let errors = {}
  if(!input.username){
    errors.username = 'Username is required'
  }else if (!/\S+@\S+\.\S+/.test(input.username)){
    errors.username = 'Username  is invalid'
  }


  if(!input.password){
    errors.password = 'Password is required'
  }else if (!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid'
  }

  return errors
}





export default function  form() {

  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const [error, setError] = useState({}) 
  

  let handleInputChange = (event) => {
   
    setInput({
      ...input,
      [event.target.name]:event.target.value
    })

    let objError = validate({...input, [event.target.name]: event.target.value})
    setError(objError)
  }



  return (
      <form>
        <label>Username:</label>
        <input 
        className={error.username && 'danger'}
        type="text" 
        name='username' 
        value={input.username}
        placeholder='user'  
        onChange={handleInputChange}/>
        {
        error.username && (<p className='danger'>{error.username}</p>)
        }


        <label>Password:</label>
        <input
        className={ error.password && 'danger'} 
        type="password" 
        name='password' 
        value={input.password}
        placeholder='*********'  
        onChange={handleInputChange}/>

        {
         error.password && (<p className='danger'>{error.password}</p>)
        }

        

      </form>
  )
}
