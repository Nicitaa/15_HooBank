import PropTypes from 'prop-types'
import {useContext, useState} from 'react'
import { motion } from 'framer-motion'
import { MessageContext } from '../../../../context';

export function Message ({messageTitle,messageSubTitle,messageType}) {
  const XS = window.innerWidth < 361
  const {messageRef,hideMessage} = useContext(MessageContext)
  //messageTypes - info / success / error
  let svgColor;
  if (messageType==='error') svgColor='fill-red-500',messageType='error'
  else if (messageType==='success') svgColor='fill-green-500',messageType='success'
  else svgColor='bg-yellow-400',messageType='info'
  
return (
<motion.div ref={messageRef}
animate={XS ? {y:[40,0]} : {y:[40,-10]}}
transition={{duration:0.25}}
className="fixed border bottom-0 right-5 bg-[#141414] max-w-[90vh]
 rounded px-4 py-2 flex gap-2 XS:right-0 XS:w-[100vw] SD:w-[90vw]"
 onClick={e => e.stopPropagation()}
 {...setTimeout(() => hideMessage(),5000)}>

  <svg className={`w-12 h-12 ${svgColor}`}>
    <use xlinkHref={`./sprite.svg#${messageType}`}></use>
  </svg>
 <div className='text'>
 <p className='title font-bold'>{messageTitle}</p>
  <p className='subTitle'>{messageSubTitle}</p>
 </div>
</motion.div>
)
}

Message.propTypes = {
  messageTitle:PropTypes.string.isRequired
}