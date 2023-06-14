import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password' />
            <button className='authBtn'>Login</button>
            <p>Esse é um erro!</p>
            <span>Não tem uma conta? <Link to="/register">Cadastre-se</Link></span>
        </form> 
    </div>
  )
}

export default Login