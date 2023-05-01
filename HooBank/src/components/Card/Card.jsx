import { ButtonDefault } from '../UI/Buttons/ButtonDefault/ButtonDefault'
import './card.css'

function openUrl(html) {
  window.open(html, "_blank")
 }

export function Card ({cardTitle,cardSubTitle}) {
return (
<div className='xl-card-container XS:flex XS:flex-col XS:text-center XS:justify-center 
SM:flex SM:flex-col SM:text-center SM:justify-center SD:p-8'>
  <div className='flex flex-col gap-6 SD:pr-4'>
      <h1 className='title text-4xl font-bold FHD:text-[3.6rem]'>{cardTitle}</h1>
      <p className='subTitle max-w-[55%] XS:min-w-full SM:min-w-full SD:max-w-full FHD:text-[2rem]'>{cardSubTitle}</p>
  </div>
  {/* continue make as in site example */}
  <ButtonDefault buttonClassName='h-16' buttonDefaultTitle='Get started' clickEvent={() => openUrl('https://github.com/Nicitaa')}/>
</div>
)
}