import { ButtonCircle } from "../../components/Buttons/ButtonCircle"

export function MainText () {
return (


  <div className="flex flex-col items-center text-center Tablet:text-start Tablet:block">
  <div className="inline-block relative">
  <h1 className="title text-3xl mb-2 
  MobileL:text-5xl 
  Tablet:text-5xl   Tablet:mb-4 
  Laptop:text-6xl   Laptop:mb-6 
  LaptopL:text-8xl 
  4K:text-[10.5rem]   4K:mb-16">
    {/* br because when you increase/descrease width text wrapping */}
  The Next <br/> <span className="text-gradient">Generation<br/></span> Payment Method
  </h1>
  <ButtonCircle className="absolute right-[5%] top-[-5%]
  Laptop:p-[3.5rem]  Laptop:text-xl
  LaptopL:p-[6rem]   LaptopL:text-3xl
  4K:p-[11rem]       4K:text-7xl
  "
  label="Get started"/>
  </div>
  <p className="subTitle text-lg Laptop:text-3xl LaptopL:text-4xl 4K:text-7xl">
      Our team of experts uses a methodology to 
      identify the credit cards most likely to 
      fit your needs. We examine annual percentage rates, annual fees.
  </p>
  </div>


)
}