import { useContext } from 'react'

import { Number } from '../../components'
import { Container } from "../../../components"
import { NumbersContext } from "../../../context"


type NumberItemTypes = {
  number:string
  label:string
}

export function Numbers () {

  const {numberItemsState} = useContext(NumbersContext)

  const numberItemsStorage = localStorage.getItem("numberItems")

  const numberItems:NumberItemTypes[] =  numberItemsStorage ? JSON.parse(numberItemsStorage) : numberItemsState

return (
<Container>
  <div className="flex flex-col flex-wrap justify-around gap-4 Tablet:flex-row">
  
    {numberItems.map((numberItem) => (
      <Number number={numberItem.number} label={numberItem.label} key={numberItem.label}/>
    ))}
   
  </div>
</Container>
)
}