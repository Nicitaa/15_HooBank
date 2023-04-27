import './feedback.css'

export function Feedback ({feedbackTitle,imgUrl,feedbackAuthor,feedbackMajor}) {
return (
<card className='card flex gap-6'>
  {/* with png or webp - bad quality - only with svg in <img/> normal quality and size*/}
  <img className='w-[42px] h-[27px]' src="./quotes.svg" alt="" />
  <p className='title text-[18px] py-4 min-h-[60%]'>{feedbackTitle}</p>
  <div className='flex gap-4'>
  <img className='w-12 h-12' src={imgUrl}/>
    <div className='flex flex-col'>
    <h1 className='title text-xl'>{feedbackAuthor}</h1>
    <h2 className='subTitle'>{feedbackMajor}</h2>
    </div>
  </div>
</card>
)
}