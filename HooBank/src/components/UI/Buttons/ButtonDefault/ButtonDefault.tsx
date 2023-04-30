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
<button onClick={clickEvent} className={`button-default-container ${buttonClassName} XS:text-[0.8em] XS:max-h-[3.5em]
XS:mt-6 XS:max-w-[40vw] SM:mt-8`}>
  {children}
  {buttonDefaultTitle}
</button>
)
}