import { Discount,Text,Image,ButtonCircle } from "../../../components"

export function Main () {

return (
  <section className="py-4 mb-32 flex">

    <div className="main-content max-w-2xl">
    <Discount discountClass={'mb-4'} svgUrl={'./sprite.svg#percent'} 
    discountTitle={
        <p>
        <span className='text-highlight'>20% </span>
        Discount For{" "}
        <span className='text-highlight'>1 Months </span>
        Account
        </p>
    }/>
    
    <Text textClass={'max-w-full'}
      title={
      <h1 className='text-7xl font-bold'>
      The Next{" "}
      <span className='text-gradient'> Generation </span>
      Payment method.
      </h1>}
      subtitle={<p>Our team of experts uses a methodology to 
      identify the credit cards most likely to 
      fit your needs. We examine annual percentage rates, annual fees.</p>}/>
    </div>

    <Image imageClass={'absolute w-[450px] right-0'} imgUrl={'./robot.webp'}/>
 

    <ButtonCircle buttonCircleClass={'absolute top-[32%] left-[37%]'} buttonTitle={<p>Get <br/>started</p>}/>   

  </section>
)
}