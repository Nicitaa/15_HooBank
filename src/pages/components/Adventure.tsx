interface AdventureProps {
  svgId?:string
  title:string
  subTitle:string
}

export function Adventure ({svgId,title,subTitle}:AdventureProps) {
  return (
  <div className="adventure-bg p-4 flex items-center gap-4 rounded-lg 4K:rounded-3xl">
   <div className="p-4 bg-sky-500/[0.125] rounded-full inline-flex justify-center items-center
   LaptopL:p-6
   4K:p-14">
    <svg className='w-8 h-8
    LaptopL:w-10 LaptopL:h-10
    4K:w-24 4K:h-24'>
    <use xlinkHref={`./sprite.svg#${svgId}`}/>
    </svg>
   </div>
    
    <div className="flex flex-col">
      <h1 className="title font-bold
      MobileL:text-xl
      LaptopL:text-3xl
      4K:text-7xl 4K:mb-4">{title}</h1>
      <p className="subTitle
      MobileL:text-lg 
      LaptopL:text-2xl
      4K:text-6xl">{subTitle}</p>
    </div>
  </div>
  )
  }