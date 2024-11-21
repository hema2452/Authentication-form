import { useState } from 'react'
import './App.css'
import Login from './Login'
import Register from './Register'
function App() {
  const[form,setForm] = useState('Reister')
  const toggleForm = (formName) => {
    setForm(formName)
  }
  return (
    <>
    {
      form === 'login' ? <Login switch ={toggleForm} /> :  <Register switch={toggleForm}/>
     
    }
    </>
  )
}

export default App
