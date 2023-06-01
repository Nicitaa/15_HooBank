import React, { useContext } from 'react'
import { Message } from '../../Message/Message'
import { MessageContext } from '../../../../../context'
import './modal.css'
import { useSwipeable } from 'react-swipeable'

interface IModalProps {
  children:React.ReactNode
  modalTitle:string
  closeModal:() => void
}


export function Modal ({closeModal,children,modalTitle}:IModalProps) {

 const {showMessage,messageType,messageTitle,messageSubTitle} = useContext(MessageContext)



 /* for e.stopPropagation when mousedown on modal and mouseup on modalBg - start */
 const modalBgHandler = useSwipeable({
  onTouchStartOrOnMouseDown: (e) => {
    console.log('mouse down',e)
    closeModal()   
  },
  trackMouse: true
})

const modalHandler = useSwipeable({
  onTouchStartOrOnMouseDown: (e) => {
    e.event.stopPropagation()
  },
  trackMouse: true
})
 /* for e.stopPropagation when mousedown on modal and mouseup on modalBg - end */

 
return (
 <div className="fixed bg-black/[0.6] top-0 right-0 left-0 bottom-0" {...modalBgHandler}>
  <div className="modal" {...modalHandler}>
    <h1 className="text-2xl font-bold text-center mb-8 FHD:text-[4rem] FHD:mt-8 FHD:mb-20">{modalTitle} </h1>
    <svg className="w-6 h-6 fixed top-4 right-4 FHD:w-[4rem] FHD:h-[4rem]" cursor={'pointer'} onClick={closeModal}>
      <use xlinkHref="./sprite.svg#close"/>
    </svg>
    {children}
    </div>
  {showMessage && <Message messageType={messageType} messageTitle={messageTitle} messageSubTitle={messageSubTitle}/>}
</div>
)
}