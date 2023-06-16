interface NumberProps {
  number:string
  label:string
}

export function Number ({number,label}:NumberProps) {
return (
<div className='flex items-center justify-center text-white'>
  <p className="pr-1 text-2xl font-bold
  Tablet:text-xl
  Laptop:text-3xl
  LaptopL:text-4xl
  4K:text-8xl 4K:pr-4">{number}</p>
  <p className="uppercase text-lg text-gradient
  MobileL:text-2xl
  Tablet:text-xl
  Laptop:text-2xl
  LaptopL:text-4xl
  4K:text-7xl">{label}</p>
</div>
)
}