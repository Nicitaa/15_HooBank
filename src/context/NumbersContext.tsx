import { createContext, useState } from "react"
import { numberItems } from "../constant"

interface NumberItemTypes {
  number:string
  label:string
}

type NumbersContextType = {
  numberItemsState:NumberItemTypes[]
  setNumberItemsState:React.Dispatch<React.SetStateAction<NumberItemTypes[]>>
}


export const NumbersContext = createContext({} as NumbersContextType)

export function NumbersProvider({children}:{children:React.ReactNode}) {

  const [numberItemsState,setNumberItemsState] = useState<NumberItemTypes[]>(numberItems)

  return (
    <NumbersContext.Provider value={{numberItemsState,setNumberItemsState}}>
      {children}
    </NumbersContext.Provider>
  )
}