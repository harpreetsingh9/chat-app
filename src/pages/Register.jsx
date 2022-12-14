import React from 'react'

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Chat App</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='Full Name' />
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display: "none"}} type="file" id='file' />
                <label htmlFor="file">
                    upload pic
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}
