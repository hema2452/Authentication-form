import React from 'react'
import { useState } from 'react';

const Register = (props) => {
    const[fullname,setfullName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(email);
      console.log(fullname)
    }

  return (
    <div className="main-container">
        <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor="fullname">FullName</label>
            <br />
            <input type="text" value={fullname}  placeholder="Enter Name" name="fullname" id="fullname" onChange={(e) =>setfullName(e.target.value)} />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email"  value={email} placeholder='bc@gmail.com' onChange={(e)=>setEmail(e.target.value)} name="email" id="email" />
            <br />
            <label htmlFor="password">Password</label>
            
            <input type="password"value={password} placeholder = "****" onChange={(e)=>setPassword(e.target.value)} name="password" id="password" />
            <br />
            <button type="submit"> Submit</button>            
        </form>
        <button className="link-content" onClick={() => props.switch('login')}>Already'have any Account ? Login</button>

    
    </div>
  )
}

export default Register