import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"

export function Login () {

  const {setLogin,setShowLogin} = useContext(LoginContext)  

  const submitHandler = (e) => {
    e.preventDefault()
    setShowLogin(false)
  }
  return (

  <form onSubmit={submitHandler}>
    <input className="border rounded outline-0 px-4 py-2 w-full bg-gray-400/50"
    placeholder="Enter login" onChange={e => setLogin(e.target.value)}/>
    <button className="rounded outline-0 px-4 py-2 bg-green-500" type="submit">Login</button>
  </form>
)
}