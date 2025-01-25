import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [IsSignIn, setIsSignIn] = useState(true);
  const toggleSign = () => {
    setIsSignIn(!IsSignIn);
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg" alt="net back img" />
        </div>
        <form className='absolute bg-black p-12 my-36 w-3/12 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl my-2'>{IsSignIn ? 'Sign In' : 'Sign Up'}</h1>
          { !IsSignIn &&
              <input type='text' placeholder='Full Name' className='p-2 m-2 rounded-lg w-full bg-gray-700 bg-opacity-60'></input>
          }
          <input type='text' placeholder='Email or mobile number' className='p-2 m-2 rounded-lg w-full bg-gray-700 bg-opacity-60'></input>
          <input type='password' placeholder='Password' className='p-2 m-2 rounded-lg w-full bg-gray-700 bg-opacity-60'></input>
          <button className='bg-red-600 p-2 m-2 rounded-lg w-full'>{IsSignIn ? 'Sign In' : 'Sign Up'}</button>
          <p className='cursor-pointer' onClick={toggleSign}>{ IsSignIn ? 'New to Netflix? Sign Up Now.' : 'Already Registered? Sign In' }</p>
        </form>
    </div>
  )
}

export default Login;