import {Main} from './Main'
import { Numbers } from './Numbers'
import { Feature1 } from './Feature1'
import { useContext, createContext, useState } from 'react'
import {Modal} from './../../components'
import { ButtonsContext } from './../../context/ButtonsContext'

export const shitContext = createContext(null);

export function Home () {
  
  const {modal,open,close} = useContext(ButtonsContext)

  const [number, setNumber] = useState({
    userActive: "3800+",
    trustedByCompany: "230+",
    transaction: "$230M+"
  });
  const setContextState = (newState) => {
    setNumber({
      ...number,
      ...(typeof newState === "function" ? newState(state) : newState)
    });
  };

  console.log("Home - newUserActive =", number.userActive);


return (
<>
<shitContext.Provider value={{ number, setContextState }}>
  <Main/>
  <Numbers/>
  <Feature1/>
  <div>Feature2</div>
  <div>Feature3</div>

  {modal && <Modal modalTitle={'Admin panel'}/>}

  </shitContext.Provider>
  
</>
)
}