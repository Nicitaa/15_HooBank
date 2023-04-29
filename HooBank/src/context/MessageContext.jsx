import { createContext, useState,useRef } from "react";
import { gsap } from 'gsap'

export const MessageContext = createContext()

export function MessageProvider({children}) {
  const [showMessage,setShowMessage] = useState(false)
   const [messageType,setMessageType] = useState('')
   const [messageTitle,setMessageTitle] = useState('')
   const [messageSubTitle,setMessageSubTitle] = useState('')

  /* logic for - aniamtionIn - wait(4000) - animationOut */
  const messageRef = useRef(null);
  function hideMessage() {
    const message = messageRef.current;
    console.log(message)
    gsap.to(message, {
      duration: 1,
      y:80,
      onComplete: () => setShowMessage(false),
    });
  }


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
      messageRef,
      hideMessage
      }}>
      {children}
    </MessageContext.Provider>
  )
}