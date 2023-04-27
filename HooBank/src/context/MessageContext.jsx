import { createContext, useState } from "react";

export const MessageContext = createContext()

export function MessageProvider({children}) {
  const [showMessage,setShowMessage] = useState(false)
   const [messageType,setMessageType] = useState('')
   const [messageTitle,setMessageTitle] = useState('')
   const [messageSubTitle,setMessageSubTitle] = useState('')


  return (
    <MessageContext.Provider value={{
      children,
      setShowMessage,
      setMessageType,
      setMessageTitle,
      setMessageSubTitle,
      showMessage,
      messageType,
      messageTitle,
      messageSubTitle,
      }}>
      {children}
    </MessageContext.Provider>
  )
}