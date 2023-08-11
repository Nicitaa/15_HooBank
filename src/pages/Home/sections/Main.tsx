import { Discount, MainText } from "../../components";

export function Main() {
  return (
    <div className="relative overflow-x-hidden flex">

      {/* Main  */}
      <div className="flex overflow-hidden">
        <div className="flex flex-col gap-4 px-4 
    Tablet:gap-8 Tablet:pl-8
    Laptop:pl-12
    4K:pl-32 4K:gap-16">
          <Discount />
          <MainText />
        </div>
        <img className="hidden max-w-[40%] object-cover Tablet:block" src="./robot.webp" alt="robot" />
      </div>



      <div className='glare glare-blue left-[-60%]' />
      <div className='glare glare-blue right-[-50%] top-[20%]' />

    </div>
  )
}