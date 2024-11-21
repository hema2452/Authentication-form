import React from 'react'
import { useState } from 'react'


const Login = (props) => {
  console.log(props)
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
      
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email)

    }
  return (
    <div className='main-container'>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email"  value={email} placeholder='bc@gmail.com' onChange={(e)=>setEmail(e.target.value)} name="email" id="email" />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password"value={password} placeholder = "****" onChange={(e)=>setPassword(e.target.value)} name="password" id="password" />
            <br />
            <button type="submit"> Submit</button>            
        </form>
        <button className=" link-content" onClick={() => props.switch('register')} >Dont'have any Account ? Register</button>
    </div>
  )
}

export default Login