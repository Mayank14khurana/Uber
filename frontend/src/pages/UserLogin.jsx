import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData,setUserData]=useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    })
    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img src="https://logospng.org/download/uber/logo-uber-4096.png" className='w-16 mb-10' alt="logo" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
          <input type="email" required placeholder='email@exampla.com' className='rounded bg-[#eeeeee] px-4 border w-full text-lg placeholder:text-base py-2 mb-7' value={email} onChange={(e) => setEmail(e.target.value)} />
          <h3 className='text-lg mb-2 font-medium'>Enter password</h3>
          <input type="password" required placeholder='password' className='rounded bg-[#eeeeee] px-4 border w-full text-lg placeholder:text-base py-2 mb-7' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className='rounded-lg bg-[#111] text-white font-semibold  px-4 border w-full text-lg   py-2 mb-3  placeholder:text-base ' >Login</button>
        </form>
        <p className='text-center'> New Here? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p>
      </div>
      <div>
        <Link to='/captain-login' className='rounded-lg bg-[#10b461] text-white font-semibold flex items-center justify-center px-4 border w-full text-lg   py-2 mb-5  placeholder:text-base ' >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
