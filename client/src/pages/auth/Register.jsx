import React from 'react'

export default function Register() {
  return (
    <div className='cont'>
          <form className='RegisterForm'>
              <div className='input-group'>
                  <label className='label'>first Name</label>
                  <input type='text' placeholder='Enter your first name' />
              </div>

              <div className='input-group'>
                  <label className='label'>Last Name</label>
                  <input type='text' placeholder='Enter your Last name' />
              </div>

              <div className='input-group'>
                  <label className='label'>Email</label>
                  <input type='email' placeholder='Enter your Email' />
              </div>

              <div className='input-group'>
                  <label className='label'>BirthDate</label>
                  <input type='date'  />
              </div>

              <div className='input-group'>
                  <label className='label'>Password</label>
                  <input type='password' placeholder='Enter your Password' />
              </div>

              <div className='input-group'>
                  <label className='label'> Confrim Password</label>
                  <input type='password' placeholder='Confrim Password' />
              </div>

              <div className='input-group'>
                  <input type='button' value="Register" />
              </div>
              
                <div className='Login'>
                  <a href='#'>Already have account?Login</a>
              </div>
          </form>
    </div>
  )
}
