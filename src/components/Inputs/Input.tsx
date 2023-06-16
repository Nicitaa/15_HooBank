interface InputProps {
  placeholder?:string
  label:string
  value:string
  onChange:(e:string) => void
}

export function Input ({placeholder,label,value,onChange}:InputProps) {

return (
 <div className="relative">
  <label className="text-sm absolute top-[-55%] left-[2%] text-[#cdcdcd]
  LaptopL:text-2xl LaptopL:left-[1%] LaptopL:top-[-60%]
  4K:text-6xl 4K:top-[-55%]">{label}</label>
  <input className="p-2 w-full border-[1px] border-solid border-[#cdcdcda8] text-[#cdcdcd]
  text-sm rounded-xl outline-none bg-black/[0.4]
  Laptop:rounded-lg
  LaptopL:text-3xl LaptopL:px-4 LaptopL:py-3
  4K:text-7xl 4K:rounded-[1.75rem] 4K:px-8 4K:py-6"
  placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)}/>
 </div>
)
}