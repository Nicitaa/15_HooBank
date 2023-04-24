import { Discount,Text,Image,ButtonCircle } from "../../components"

export function Main () {




return (
  <section className="py-4 mb-32 flex flex-row">

    <div className="main-content max-w-2xl">
    <Discount classNameParam={'mb-4'}/>
    <Text
      title={
      <h1 class='text-7xl font-bold'>
      The Next{" "}
      <span class='text-gradient'> Generation </span>
      Payment method.
      </h1>}
      subtitle={<p>Our team of experts uses a methodology to 
      identify the credit cards most likely to 
      fit your needs. We examine annual percentage rates, annual fees.</p>}/>
    </div>

    <Image classNameParam={'absolute w-[450px] right-0'} imgUrl={'./robot.png'}/>
 

    <ButtonCircle classNameParam={'absolute top-[32%] left-[37%]'} buttonText={<p>Get <br/>started</p>}/>   

  </section>
)
}