import React from 'react'
import Title from './Title'

export default function Contact() {
  return (
    <div className='p-5'>
      <Title title="Contact Component" />
      <form action="">
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="user name" />
            <label htmlFor="floatingInput">userName</label>
        </div>  
            <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="user age" />
            <label htmlFor="floatingInput">userAge</label>
        </div>
          <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">userEmail</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">userPassword</label>
        </div>

        <button type='button' className='btn btn-primary'>
         Send message
        </button>
      </form>
    </div>
  )
}
