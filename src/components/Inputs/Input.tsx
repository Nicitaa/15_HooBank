interface InputProps {
  placeholder?:string
  label:string
  value:string
  onChange:(e:string) => void
}

export function Input ({placeholder,label,value,onChange}:InputProps) {
  

return (
 <div className="relative">
  <label className="text-sm absolute top-[-55%] left-[2%]">{label}</label>
  <input className="p-2 w-full border-[1px] border-solid border-gray
  text-sm rounded-xl outline-none bg-black/[0.4]"
  placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)}/>
 </div>
)
}