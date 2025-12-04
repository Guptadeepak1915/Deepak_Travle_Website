import React from 'react'
import './Login.css'

const Login = () => {
  return (
   <div className='main-div'>
    <h1 style={{color:"white"}}>Login</h1>
    <hr />
    <hr />
    <div>
      <form>
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" placeholder='Username / E-mail' minLength={8} required/>
        <br/><br/>
        <label htmlFor="password">Password:</label><br/>
        <input type="password" placeholder='Password' id="password" minlength={8} required/>
        <br/>
        <div class="recovery-contents">
          <p>Forgot password</p>
          <p>Sign up</p>
        </div>
         <button class="login-button" type="submit">Login</button>
      </form>
    </div>

   </div>
  )
}

export default Login
