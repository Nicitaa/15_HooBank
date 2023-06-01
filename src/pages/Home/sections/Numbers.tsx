import { Container } from "../../../components";
import { numbers } from "../../../constant";
import { Number } from '../../components'

type NumbersType = {
  number:string
  label:string
}

const defaultArr: NumbersType[] = numbers

export function Numbers () {

  const myStorage = localStorage.getItem("numbers")

  const numbersarr:NumbersType[] =  myStorage ? JSON.parse(myStorage) : defaultArr



return (
<Container>
  <div className="flex flex-col flex-wrap justify-around gap-4 Tablet:flex-row">
  
  {numbersarr.map((number) => (
     <Number number={number.number} label={number.label} key={number.label}/>
  ))}
   
  </div>
</Container>
)
}