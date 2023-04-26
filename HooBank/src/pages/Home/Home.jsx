import {Main} from './Main'
import { Numbers } from './Numbers'
import { Feature1 } from './Feature1'
import { useContext, createContext, useState } from 'react'
import {Modal} from './../../components'
import { NumbersProvider } from '../../context/NumbersContext'
import { ButtonsContext } from '../../context/ModalContext'

export function Home () {
  
  const {modal,open,close} = useContext(ButtonsContext)
 


return (
<>
<NumbersProvider>
  <Main/>
  <Numbers/>
  <Feature1/>
  <div>Feature2</div>
  <div>Feature3</div>

  {modal && <Modal modalTitle={'Admin panel'}/>}
  </NumbersProvider>
</>
)
}