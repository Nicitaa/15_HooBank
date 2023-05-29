import { Button, Container } from "../../../components";

export function CTA () {
return (
<Container>
  <div className="card-bg flex justify-between items-center p-8 rounded-xl
  MobileL:p-10
  Laptop:p-16 Laptop:gap-8
  LaptopL:p-20
  Laptop:rounded-2xl
  4K:rounded-3xl 4K:p-48">
   <div className="Tablet:max-w-[80%] Laptop:max-w-[75%]">
   <h1 className="title text-xl font-bold mb-2
    MobileL:text-2xl
    Laptop:text-4xl Laptop:mb-4
    LaptopL:text-5xl
    4K:text-8xl">Let's try our service now!</h1>
    <p className="subTitle text-lg
    Mobile:text-xl
    Laptop:text-2xl
    LaptopL:text-4xl
    4K:text-7xl">Everything you need to accept card payments and 
    grow your business anywhere on the planet.</p>
   </div>
   <Button className="hidden h-[20%] 
   Tablet:flex
   Laptop:text-2xl Laptop:p-4
   LaptopL:text-4xl LaptopL:p-6
   4K:text-6xl 4K:p-12" label="Get started" onClick={() => window.open('https://github.com/Nicitaa')}/>
  </div>
</Container>
)
}