import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='cont'>
      <form className="Loginform">
        <header>welcome to NoteGPT</header>

        <div className='inputGroup'>
          <label>Email</label>
          <input type="email" placeholder="Enter your email"/>
        </div>

        <div className='inputGroup'>
          <label>Password</label>
          <input type="password" placeholder="Enter your Password"/>
        </div>

        <div className='inputGroup'>
          <input type="submit" value="Login" />
        </div>

        <div className='forgetPassword'>
          <Link to="/forget-password">Forget Password?</Link>
    
        </div>

      </form>
    </div>
  )
}
