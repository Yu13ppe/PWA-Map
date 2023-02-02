import React from 'react'

function Account() {
  return (
    <div className='login'>
      <form>
        <div className='form-control'>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email'/>

          <br/>

          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Password' />

          <button className='btn'>Login</button>
        </div>
      </form>
    </div>
  )
}

export {Account}