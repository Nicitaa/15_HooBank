import React from 'react'
import './buttonDefault.css'

interface ButtonDefaultProps {
  children?:React.ReactNode
  buttonDefaultTitle:string
  clickEvent:any
  buttonClassName?:string
}

export function ButtonDefault ({buttonDefaultTitle,children,clickEvent,buttonClassName}:ButtonDefaultProps) {
return (
<button onClick={clickEvent} className={`button-default-container ${buttonClassName}`}>
  {children}
  {buttonDefaultTitle}
</button>
)
}