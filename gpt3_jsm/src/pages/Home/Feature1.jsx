import { Text,Feature } from "../../components"


export function Feature1 () {
return (
<section className="py-4 mb-32 flex">

  
  <Text title={
    <h1>You do the business,
    we will handle the money.</h1>}
    subtitle={
      <p>With the right credit card, y
        ou can improve your financial life by building credit, 
        earning rewards and saving money. 
        But with hundreds of credit cards on the market.</p>
    }
  />
 
 

  <div className="flex flex-col gap-4">
  <Feature svgUrl={'./sprite.svg#star'} featureTitle={'Rewards'}
  featureSubTitle={`
  The best credit cards offer some tantalizing 
  combinations of promotions and prizes`}/>
   <Feature svgUrl={'./sprite.svg#shield'} featureTitle={'100% Secured'}
  featureSubTitle={`
  We take proactive steps make sure your information 
  and transactions are secure.`}/>
   <Feature svgUrl={'./sprite.svg#telegram'} featureTitle={'Balance Transfer'}
  featureSubTitle={`
  A balance transfer credit card can save you a lot of 
  money in interest charges.`}/>
  </div>
</section>
)
}