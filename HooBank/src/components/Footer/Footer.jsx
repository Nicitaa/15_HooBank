import { FooterLinks } from './FooterLinks'
import './footer.css'

export function Footer () {

  function openUrl(html) {
    window.open(html, "_blank")
   }

return (
<footer>
    <div className="footer-top SD:flex-col">
     
     <div className='footer-top-left XS:hidden SM:hidden SD:w-full SD:mb-8'>
      <svg className='w-auto max-w-[250px] h-[100px] flex items-center SD:max-w-[30vw] SD:m-auto'>
        <use xlinkHref="./sprite.svg#logo" />
      </svg>
      <p className="subTitle max-w-sm text-lg SD:text-center SD:m-auto">A new way to make the payments easy, reliable and secure.</p>
     </div>

    <div className='footer-top-right XS:justify-around XS:text-center XS:flex-row XS:gap-y-8 XS:gap-x-4 
    SM:w-full SM:justify-around SM:text-center SM:flex-row SM:gap-y-8 SM:gap-x-4 SD:gap-x-8 SD:justify-around'>
    <FooterLinks FooterLinksTitle={'Useful Links'}>
      <li className="li-item subTitle"><a href="https://github.com/Nicitaa" target='_blank'>Content</a></li>
      <li className="li-item subTitle"><a href="https://github.com/Nicitaa" target='_blank'>How it works</a></li>
      <li className="li-item subTitle"><a href="https://github.com/Nicitaa" target='_blank'>Create</a></li>
      <li className="li-item subTitle"><a href="https://github.com/Nicitaa" target='_blank'>Explore</a></li>
      <li className="li-item subTitle"><a href="https://github.com/Nicitaa" target='_blank'>Terms&Services</a></li>
    </FooterLinks>
     <FooterLinks FooterLinksTitle={'Community'}>
      <li className="li-item subTitle"><a href="https://github.com/Nicitaa" target='_blank'>Help Center</a></li>
      <li className="li-item subTitle"><a href="https://github.com/Nicitaa" target='_blank'>Partners</a></li>
      <li className="li-item subTitle"><a href="https://github.com/Nicitaa" target='_blank'>Suggestions</a></li>
      <li className="li-item subTitle"><a href="https://github.com/Nicitaa" target='_blank'>Blog</a></li>
      <li className="li-item subTitle"><a href="https://github.com/Nicitaa" target='_blank'>Newsletters</a></li>
    </FooterLinks>
    <FooterLinks FooterLinksTitle={'Partner'}>
      <li className="li-item subTitle"><a href="https://github.com/Nicitaa" target='_blank'>Our Partner</a></li>
      <li className="li-item subTitle"><a href="https://github.com/Nicitaa" target='_blank'>Become a Partner</a></li>
    </FooterLinks>
    </div>

    </div>






    <div className="footer-bottom XS:justify-center">
      <h1 className='title XS:hidden SM:pr-4'>Copyright 2021 HooBank. All Rights Reserved.</h1>
        <div className='flex gap-x-4 items-center'>
          <svg className='w-6 h-6 cursor-pointer' onClick={() => openUrl('https://github.com/Nicitaa')}>
            <use xlinkHref='./sprite.svg#instagram'/>
          </svg>
          <svg className='w-6 h-6 cursor-pointer' onClick={() => openUrl('https://github.com/Nicitaa')}>
            <use xlinkHref='./sprite.svg#facebook'/>
          </svg>
          <svg className='w-6 h-6 cursor-pointer' onClick={() => openUrl('https://github.com/Nicitaa')}>
            <use xlinkHref='./sprite.svg#twitter'/>
          </svg>
          <svg className='w-6 h-6 cursor-pointer' onClick={() => openUrl('https://github.com/Nicitaa')}>
            <use xlinkHref='./sprite.svg#linkedin'/>
          </svg>
         <img className='w-auto max-w-[32px] cursor-pointer' src='./telegram.webp' onClick={() => openUrl('https://t.me/icpcedu')}/>
        </div>
    </div>



</footer>
)
}