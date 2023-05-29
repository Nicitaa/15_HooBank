import { Container } from "../../../components";
import { numbers } from "../../../constant";
import { Number } from '../../components'

export function Numbers () {
return (
<Container>
  <div className="flex flex-col flex-wrap justify-around gap-4 Tablet:flex-row">
    {numbers.map(number => (
      <Number number={number.number} label={number.label} key={number.label}/>
    ))}
  </div>
</Container>
)
}