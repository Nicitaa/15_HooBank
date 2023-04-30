import { Discount,Text,Image,ButtonCircle } from "../../../components"

export function Main () {

return (
  <main className="py-4 mb-32 flex XS:mb-4 XS:pb-0 SM:mb-0 SM:pb-0 SD:pt-0 SD:mb-2 SD:justify-center">

    <div className="main-content max-w-2xl">
    <Discount discountClass={'mb-4 XS:m-0 XS:mb-8 XS:max-w-[90vw] SM:mb-6 SD:mb-6'} svgUrl={'./sprite.svg#percent'} 
    discountTitle={
        <p>
        <span className='text-highlight'>20% </span>
        Discount For{" "}
        <span className='text-highlight'>1 Months </span>
        Account
        </p>
    }/>
    
    <Text textClass={'max-w-full XS:text-center SM:text-center SD:text-center'}
      title={
      <h1 className='text-7xl font-bold XS:text-4xl SM:text-6xl SD:text-6xl'>
      The Next{" "}
      <span className='text-gradient'> Generation </span>
      Payment method.
      </h1>}
      subtitle={<p>Our team of experts uses a methodology to 
      identify the credit cards most likely to 
      fit your needs. We examine annual percentage rates, annual fees.</p>}/>
    <ButtonCircle buttonCircleClass={'absolute top-[34%] left-[32%] XS:hidden SM:hidden SD:hidden'} buttonTitle={<p>Get <br/>started</p>}/>   

    </div>

    <Image imageClass={'absolute w-[450px] right-0 XS:hidden SM:hidden SD:hidden'} imgUrl={'./robot.webp'}/>
 


  </main>
)
}