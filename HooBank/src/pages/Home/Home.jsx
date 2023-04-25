import {Main} from './Main'
import { Numbers } from './Numbers'
import { Feature1 } from './Feature1'
import { useContext } from 'react'
import {Modal} from './../../components'
import { ButtonsContext } from './../../context/ButtonsContext'


export function Home () {
  
  const {modal,open,close} = useContext(ButtonsContext)

return (
<>
  <Main/>
  <Numbers/>
  <Feature1/>
  <div>Feature2</div>
  <div>Feature3</div>

  {modal && <Modal modalTitle={'Admin panel'}/>}
</>
)
}