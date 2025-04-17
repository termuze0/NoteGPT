import React from 'react'

export default function ForgetPassword() {
  return (
      <div className='cont'>
          <form className='forgetForm'>
           <header>Reset you password</header>

        <div className='inputGroup'>
          <label>Email</label>
          <input type="email" placeholder="Enter your email"/>
        </div>


        <div className='inputGroup'>
          <input type="submit" value="reset" />
        </div>

        
          </form>
      
    </div>
  )
}
