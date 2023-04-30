import './feedback.css'

export function Feedback ({feedbackTitle,imgUrl,feedbackAuthor,feedbackMajor}) {
return (
<div className='feedback-card-container XS:min-w-full XS:gap-0 SM:min-w-full SM:p-2 SM:gap-0
SD:w-full SD:gap-0 SD:py-2 SD:px-4'>
  {/* with png or webp - bad quality - only with svg in <img/> normal quality and size*/}
  <img className='w-[42px] h-[27px]' src="./quotes.svg" alt="" />
  <p className='title text-[18px] py-4 min-h-[60%]'>{feedbackTitle}</p>
  <div className='flex gap-4 XS:items-center SM:items-center'>
  <img className='w-12 h-12' src={imgUrl}/>
    <div className='flex flex-col'>
    <h1 className='title text-xl SM:w-full'>{feedbackAuthor}</h1>
    <h2 className='subTitle'>{feedbackMajor}</h2>
    </div>
  </div>
</div>
)
}