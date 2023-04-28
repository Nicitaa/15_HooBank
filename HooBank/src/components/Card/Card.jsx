import { ButtonDefault } from '../UI/Buttons/ButtonDefault/ButtonDefault'
import './card.css'

function openUrl(html) {
  window.open(html, "_blank")
 }

export function Card ({cardTitle,cardSubTitle}) {
return (
<div className='xl-card-container'>
  <div className='flex flex-col gap-6'>
      <h1 className='title text-4xl font-bold'>{cardTitle}</h1>
      <p className='subTitle max-w-[55%]'>{cardSubTitle}</p>
  </div>
  {/* continue make as in site example */}
  <ButtonDefault buttonClassName='h-16' buttonDefaultTitle='Get started' clickEvent={() => openUrl('https://github.com/Nicitaa')}/>
</div>
)
}