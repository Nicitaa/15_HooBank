interface FeedbackProps {
  title:string
  imgSrc?:string
  authorTitle:string
  authorSubTitle?:string
}

export function Feedback ({title,imgSrc,authorTitle,authorSubTitle}:FeedbackProps) {
return (
<div className="feedback-card-bg flex flex-col justify-between p-6 rounded-3xl gap-6
MobileM:p-8
Tablet:w-[45%]
4K:w-[30%] 4K:p-16">

    <div className="flex flex-col gap-4 4K:gap-8">
      <img className='max-w-[20%] Laptop:max-w-[15%] LaptopL:max-w-[12.5%]' src="./quotes.svg" alt="quotes" />
      <p className='title 
      MobileL:text-xl
      LaptopL:text-3xl
      4K:text-6xl 4K:mb-4'>{title}</p>
    </div>

    <div className='flex flex-col items-center gap-4 text-center
    Tablet:flex-row Tablet:items-start'>
      <img className='max-w-[30%] 4K:w-[20%]' src={imgSrc}/>
      <div className='flex flex-col text-center justify-center align-middle Tablet:text-start'>
        <h1 className='title font-bold
        MobileL:text-xl
        Tablet:text-lg
        Laptop:text-2xl
        LaptopL:text-3xl
        4K:text-6xl'>{authorTitle}</h1>
        <h2 className='subTitle 
        MobileL:text-lg
        LaptopL:text-2xl
        4K:text-5xl'>{authorSubTitle}</h2>
      </div>
    </div>
</div>


)
}