import { Link } from 'react-router-dom'
import { footerLinks,socialLinks } from '../../constant/index'
import { Container } from '..'


export function Footer () {

  function openUrl(html:string) {
    window.open(html, "_blank")
   }

return (
<footer className='mt-auto LaptopL:flex LaptopL:flex-col'>
      
  <Container className='flex flex-col border-b-[1px] border-solid border-[#3F3E45]
  LaptopL:flex-row
  4K:border-b-2'>
       {/* Logo + subTitle */}
       <div className='flex flex-col items-center text-center mb-4
       LaptopL:w-1/4 LaptopL:items-start LaptopL:text-start'>
     <svg className='w-38 h-12 mb-2
     MobileL:w-40 MobileL:h-12 
     Tablet:w-52 Tablet:h-16
     LaptopL:w-64 LaptopL:h-24
     4K:w-[36rem] 4K:h-[16rem]'>
        <use xlinkHref='./sprite.svg#logo'/>
     </svg>
      <p className='MobileM:px-8
      Laptop:text-2xl 
      LaptopL:text-3xl LaptopL:mb-4 LaptopL:p-0
      4K:text-6xl'>A new way to make the payments easy, 
      reliable and secure.</p>
     </div>


    {/* Footer links */}
    <div className='flex justify-around flex-wrap gap-4 pb-4
    MobileL:flex-nowrap MobileL:px-4
    LaptopL:w-3/4'>
      {footerLinks.map(section => (
          <div className='w-full' key={section.title}>
            <h1 className='title font-bold text-xl text-center mb-2 
            Laptop:text-2xl
            LaptopL:text-4xl
            4K:text-7xl 4K:pb-4 4K:pt-8'>{section.title}</h1>
            <ul className='subTitle flex flex-col text-center
            Laptop:text-xl
            LaptopL:text-3xl
            4K:text-6xl'>
            {section.links.map(link => (
              <li  key={link.name}><Link className='footer-link leading-8 LaptopL:leading-10 4K:leading-normal' to={link.link}>
                {link.name}</Link>
              </li>
            ))}
            </ul>
          </div>
        )
      )}
    </div>
  </Container>


  {/* Footer social links */}
    <Container className='pb-4 LaptopL:pt-4 4K:pb-8'>
      <h1 className='text-center my-2
      Laptop:text-xl
      LaptopL:text-3xl
      4K:text-6xl 4K:mb-8'>Copyright 2021 HooBank. All Rights Reserved.</h1>
        <div className='flex flex-wrap justify-center items-center gap-x-8 gap-y-4
        LaptopL:gap-x-12
        4K:gap-16'>
          {socialLinks.map(link => (
            <svg className='w-6 h-6 cursor-pointer
            Laptop:w-7 Laptop:h-7
            LaptopL:w-10 LaptopL:h-10
            4K:w-16 4K:h-16' key={link.id} onClick={() => openUrl(`${link.url}`)}>
             <use xlinkHref={`./sprite.svg#${link.id}`}/>
            </svg>
          ))}
         <img className='w-auto max-w-[32px] cursor-pointer 
         Laptop:max-w-[38px]
         LaptopL:max-w-[48px]
         4K:max-w-[128px] 4K:w-[92px]' src='./telegram.webp' onClick={() => openUrl('https://t.me/icpcedu')}/>
        </div>
    </Container>

</footer>
)
}