interface DownloadButtonProps {
  onClick:() => void
  svgId?:string
  className?:string
}


export function DownloadButton ({onClick,svgId,className}:DownloadButtonProps) {
return (
<button onClick={onClick} className={`${className}`}>
  <svg className={`
  w-28 h-12
  MobileM:w-32  MobileM:h-12
  MobileL:w-38
  Tablet:w-42
  Laptop:w-40   Laptop:h-16
  LaptopL:w-52  LaptopL:h-26
  4K:w-96       4K:h-32`}>
  <use xlinkHref={`./sprite.svg#${svgId}`}/>
  </svg>
</button>
)
}