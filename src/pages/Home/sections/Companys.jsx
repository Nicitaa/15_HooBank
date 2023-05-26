import { Company } from "../../../components/Company/Company";

export function Companys () {
return (
<section className="flex justify-around items-center flex-wrap gap-x-10 gap-y-4 pb-12 XS:gap-y-8 SM:gap-y-8">
  <Company imgUrl="./airbnb.webp" imgMaxWidth={250}/>
  <Company imgUrl="./binance.webp" imgMaxWidth={250}/>
  <Company imgUrl="./coinbase.webp" imgMaxWidth={250}/>
  <Company imgUrl="./dropbox.webp" imgMaxWidth={250}/>
</section>
)
}