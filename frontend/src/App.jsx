import { useState } from 'react'

import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Login from './login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='p-2 w-screen h-screen flex items-center justify-center'>
    <Login/>
    <ToastContainer/>
  </div>
       
        
    </>
  )
}

export default App
