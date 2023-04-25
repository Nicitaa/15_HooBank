import React from 'react'
import { createContext, useState } from "react"

interface IButtosContext {
  modal:boolean
  open:() => void
  close:() => void
}

export const ButtonsContext = createContext<IButtosContext>({
  modal: false,
    open: () => {},
    close: () => {}
})

export const ButtonsState = ({children}:{children:React.ReactNode}) => {
  const [modal,setModal] = useState(true)

  const open = () => setModal(true)
  const close = () => setModal(false)

  return (
    <ButtonsContext.Provider value={{modal,open,close}}>
      {children}
    </ButtonsContext.Provider>
  )
}