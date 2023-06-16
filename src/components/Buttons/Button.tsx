import { IconType } from "react-icons"

interface ButtonProps {
  label:string
  onClick:() => void
  icon?:IconType
  className?:string
}

export function Button ({label,onClick,icon:Icon,className}:ButtonProps) {


return (
<button onClick={onClick} className={`p-3 max-w-[60%] text-[#dfdfdf] whitespace-nowrap
MobileL:text-xl
Tablet:text-lg
LaptopL:text-2xl LaptopL:p-4
4K:text-6xl 4K:p-10 4K:rounded-[2rem]
rounded-xl flex justify-center items-center gap-2 button-bg
${className}`}>
  {Icon && <Icon className="w-[24px] h-[24px] fill-[#dfdfdf]
  MobileL:w-[32px] MobileL:h-[32px]
  Tablet:w-[28px] Tablet:h-[28px]
  LaptopL:w-[36px] LaptopL:h-[36px]
  4K:w-[96px] 4K:h-[96px]"/>}
  {label}
</button>
)
}