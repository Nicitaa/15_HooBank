import './feedback.css'

export function Feedback ({feedbackTitle,imgUrl,feedbackAuthor,feedbackMajor}) {
return (
<div className='feedback-card-container XS:min-w-full XS:gap-0 SM:min-w-full SM:p-2 SM:gap-0
SD:w-full SD:gap-0 SD:py-2 SD:px-4 HD:pb-16'>
  {/* with png or webp - bad quality - only with svg in <img/> normal quality and size*/}
  <img className='w-[42px] h-[27px] FHD:w-[20%] FHD:h-[10%]' src="./quotes.svg" alt="" />
  <p className='title text-[18px] py-4 min-h-[60%] FHD:text-[2.8rem] FHD:pb-16 FHD:min-h-[70%]'>{feedbackTitle}</p>
  <div className='flex gap-4 XS:items-center SM:items-center HD:items-center'>
  <img className='w-12 h-12 FHD:w-24 FHD:h-24' src={imgUrl}/>
    <div className='flex flex-col'>
    <h1 className='title text-xl SM:w-full FHD:text-[2.4rem] FHD:pb-2'>{feedbackAuthor}</h1>
    <h2 className='subTitle FHD:text-[2rem]'>{feedbackMajor}</h2>
    </div>
  </div>
</div>
)
}