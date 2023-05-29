export function Discount () {
return (
<div className="inline-flex justify-center items-center discount-bg rounded-xl px-4 py-1 w-fit
MobileL:mt-4
Laptop:py-2
LaptopL:py-3
4K:px-8 4K:py-6 4K:rounded-2xl">
  
  <svg className='w-8 h-8 
  Laptop:w-10 Laptop:h-10
  LaptopL:w-12 LaptopL:h-12
  4K:w-28 4K:h-28'>
    <use xlinkHref='./sprite.svg#percent'/>
  </svg>

  <div className="uppercase text-[#b8b4b4] text-[0.7rem] 
  MobileM:text-[0.9rem]
  MobileL:text-[1.05rem]
  Laptop:text-[1.5rem]
  LaptopL:text-[1.75rem]
  4K:text-[3.8rem]">
    <span className="text-[#E8E6E3]">20%</span>&nbsp;discount for&nbsp;
    <span className="text-[#E8E6E3]">1 month</span> account
  </div>

</div> 
)
}