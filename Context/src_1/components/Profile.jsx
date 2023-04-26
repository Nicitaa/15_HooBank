import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"

export function Profile () {
  const {login} = useContext(LoginContext)
return (
<div className="flex w-full flex-col gap-8">
  <h1 className="text-2xl font-bold">Your login</h1>
  <p>{login}</p>
</div>
)
}