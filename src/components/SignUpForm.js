import React,{useState} from 'react'


function SignUpForm() {
    const authToken = localStorage.getItem("auth-token")
    // const userData =

  return (
    <div className='signupContainer'>
        <h4>
            Sign Up
        </h4>
        <label htmlFor='userid'>Enter User Name :</label>
        <input id='username' name='username'/>
        <label htmlFor="password">Enter Password :</label>
        <input type="password" name="password" id='password'/>
        <button></button>
    </div>
  )
}

export default SignUpForm
