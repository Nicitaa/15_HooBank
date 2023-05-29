import { Container } from "../../../components";
import { Company } from "../../components";

export function Companys () {
return (
<Container className="flex flex-wrap justify-around items-center gap-4">
  <Company imgSrc='./airbnb.webp'/>
  <Company imgSrc='./binance.webp'/>
  <Company imgSrc='./coinbase.webp'/>
  <Company imgSrc='./dropbox.webp'/>
</Container>

)
}