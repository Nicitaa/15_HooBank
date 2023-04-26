import { useState } from 'react'
import './App.css'
import { LoginContext } from './context/LoginContext'
import { Profile } from './components/Profile'
import { Login } from './components/Login'



function App() {

  const [login,setLogin] = useState('')
  const [showLogin,setShowLogin] = useState(true)

return (
<div className='App'>
  <LoginContext.Provider value={{setShowLogin,login,setLogin}}>
    {showLogin ? <Login/> : <Profile/>}
  </LoginContext.Provider>
</div>
  )

}

export default App
