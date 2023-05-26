import './main.css'
import { Discount,Text,Image,ButtonCircle } from "../../../components"


export function Main () {

return (
  <main className={`px-16 py-4 mb-32 min-h-[87vh] flex
  4K:px-32 XS:pb-0 SM:mb-0 SM:pb-0 SD:pt-0 SD:mb-2 SD:justify-center
  HD:mb-16 QHD:mb-8`}>

    <div className="main-content max-w-2xl">
    <Discount discountClass={`mb-4 XS:mb-8 XS:max-w-[90vw] SM:mb-6 SD:mb-6 
    `} svgUrl={'./sprite.svg#percent'} 
    discountTitle={<p className='text-4xl'>
      <span className='text-highlight'>20% </span>
      Discount For{" "}
      <span className='text-highlight'>1 Months </span>
      Account
      </p>}/>
    
    <Text textClass={'max-w-full XS:text-center SM:text-center SD:text-center FHD:min-w-[100vh]'}
      title={
      <h1 className='text-7xl font-bold XS:text-4xl SM:text-6xl SD:text-6xl FHD:text-[8rem]'>
      The Next{" "}
      <span className='text-gradient'> Generation </span>
      Payment method.
      </h1>}
      subtitle={<p className="FHD:text-[2rem]">Our team of experts uses a methodology to 
      identify the credit cards most likely to 
      fit your needs. We examine annual percentage rates, annual fees.</p>}/>
    <ButtonCircle buttonCircleClass={`absolute top-[34%] left-[32%] XS:hidden SM:hidden SD:hidden 
    HD:top-[30%] HD:left-[36%] FHD:top-[10%] FHD:left-[105%]`} buttonTitle={<p className="FHD:text-[2rem]">Get <br/>started</p>}/>   

    </div>

    <Image imageClass={'absolute w-[450px] right-0 XS:hidden SM:hidden SD:hidden FHD:w-[35%]'} imgUrl={'./robot.webp'}/>
 


  </main>
)
}