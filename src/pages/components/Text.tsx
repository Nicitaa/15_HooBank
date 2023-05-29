interface TextProps {
  title:string
  subTitle?:string
  children?:React.ReactNode
}

export function Text ({title,subTitle,children}:TextProps) {
return (
<div className="flex flex-col items-center Tablet:items-start Tablet:gap-2 4K:gap-12">
  <div className="text-center mb-2 MobileL:mb-4 Tablet:text-start">
  <h1 className="title text-2xl font-bold mb-2
  MobileL:text-3xl
  LaptopL:text-4xl LaptopL:mb-4
  4K:text-8xl 4K:mb-8">{title}</h1>
  <p className="subTitle
  MobileL:text-lg
  LaptopL:text-3xl
  4K:text-7xl">{subTitle}</p>
  </div>
  {children}
</div>
)
}