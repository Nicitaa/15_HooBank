import React, { useContext } from 'react'
import { Message } from '../../Message/Message'
import { MessageContext } from '../../../../../context'
import './modal.css'

interface IModalProps {
  children:React.ReactNode
  modalTitle:string
  closeModal:() => void
}



export function Modal ({closeModal,children,modalTitle}:IModalProps) {

 const {showMessage,messageType,messageTitle,messageSubTitle} = useContext(MessageContext)
 
return (
 <div className="fixed bg-black/[0.6] top-0 right-0 left-0 bottom-0" onClick={closeModal}>
  <div className="modal" onClick={e => e.stopPropagation()}>
    <h1 className="text-2xl font-bold text-center mb-8">{modalTitle} </h1>
    <svg className="w-6 h-6 fixed top-4 right-4" cursor={'pointer'} onClick={closeModal}>
      <use xlinkHref="./sprite.svg#close"/>
    </svg>
    {children}
    </div>
  {showMessage && <Message messageType={messageType} messageTitle={messageTitle} messageSubTitle={messageSubTitle}/>}
</div>
)
}