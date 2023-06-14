import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input required type='text' placeholder='username' />
            <input required type='email' placeholder='email' />
            <input required type='password' placeholder='password' />
            <button className='authBtn'>Register</button>
            <p>Esse é um erro!</p>
            <span>Já tem uma conta? <Link to="/login">Entrar</Link></span>
        </form> 
    </div>
  )
}

export default Register