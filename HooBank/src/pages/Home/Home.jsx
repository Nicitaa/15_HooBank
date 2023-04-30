/* react */
import { useContext } from 'react'
/* sections */
import {Main,Numbers,Features,Feedbacks, Companys, CTA} from './'
/* context */
import { ModalContext } from '../../context'
/* components */
import { Text,Feature,ButtonDefault,Modal,ModalChangeNumber, Image } from "../../components"
import { Card } from '../../components/Card/Card'

export function Home () {
  
  const {modal,openModal,closeModal} = useContext(ModalContext)

  function openUrl(html) {
   window.open(html, "_blank")
  }

return (
<>
    <Main/>
    <Numbers/>
    


      {/* You do the business */}
    <Features>

    <div className="flex flex-col max-w-[50%] XS:text-center XS:min-w-full SM:min-w-full SM:text-center">
  <Text title={
    <h1>You do the business,
    we will handle the money.</h1>}
    subtitle={
      <p>With the right credit card, you can 
        improve your financial life by building credit, 
        earning rewards and saving money. 
        But with hundreds of credit cards on the market.</p>
    }/>
    <div className="flex gap-4 XS:justify-center SM:justify-center SD:justify-center">
      <ButtonDefault clickEvent={() => openUrl('https://github.com/Nicitaa')} buttonDefaultTitle={<h1>My github</h1>}>
      <svg className='w-6 h-6'>
        <use xlinkHref="./sprite.svg#github" />
      </svg>
      </ButtonDefault>
      <ButtonDefault clickEvent={() => openModal()} buttonDefaultTitle={<h1>Admin panel</h1>}/>
    </div>
  </div>



  <div className="flex flex-col gap-4 max-w-[50%] XS:hidden SM:hidden SD:gap-12">
  <Feature svgUrl={'./sprite.svg#star'} featureTitle={'Rewards'}
  featureSubTitle={`
  The best credit cards offer some tantalizing 
  combinations of promotions and prizes`}/>
   <Feature svgUrl={'./sprite.svg#shield'} featureTitle={'100% Secured'}
  featureSubTitle={`
  We take proactive steps make sure your information 
  and transactions are secure.`}/>
   <Feature svgUrl={'./sprite.svg#send'} featureTitle={'Balance Transfer'}
  featureSubTitle={`
  A balance transfer credit card can save you a lot of 
  money in interest charges.`}/>
  </div>

    </Features>









      {/* Easily control */}
    <Features featureClassName={'SD:flex-wrap-reverse SD:justify-center'}>
      <Image imageClass='max-w-[50%] XS:hidden SM:hidden SD:min-w-[60vw] SD:h-auto' imgUrl='./bill.webp'/>
      


      <Text title={`
      Easily control your
      billing & invoicing
      `}
      subtitle={`
      Elit enim sed massa etiam. Mauris eu adipiscing 
      ultrices ametodio aenean neque. Fusce ipsum orci 
      rhoncus aliporttitor integer platea placerat.
      `}
      >
       <div className='flex gap-8 XS:pt-4 XS:justify-center SM:justify-center SD:justify-center SD:h-[3em]'>
        <svg className='w-[20%] h-[50%] cursor-pointer XS:h-[20vw] XS:w-[40vw] SM:w-[40vw] SM:pt-8
        SD:h-auto' 
        onClick={() => openUrl('https://github.com/Nicitaa')}>
          <use xlinkHref='./sprite.svg#get-it-in-apple-store' />
        </svg>
        <svg className='w-[20%] h-[50%] cursor-pointer XS:h-[20vw] XS:w-[40vw] SM:w-[40vw] SM:pt-8
        SD:h-auto'
         onClick={() => openUrl('https://github.com/Nicitaa')}>
          <use xlinkHref='./sprite.svg#get-it-in-google-play'/>
        </svg>
       </div>
      </Text>

      
    </Features>












          {/* Find a better card */}
          <Features featureClassName={'flex-row-reverse SD:flex-wrap-reverse SD:justify-center'}>
      <Image imageClass='w-max-[50%] XS:hidden SM:hidden SD:w-auto SD:h-[50vw]' imgUrl='./card.webp'/>
      


      <Text title={`
      Find a better card deal
      in few easy step
      `}
      subtitle={`
      Elit enim sed massa etiam. Mauris eu adipiscing 
      ultrices ametodio aenean neque. Fusce ipsum orci 
      rhoncus aliporttitor integer platea placerat.
      `}
      >
       <div className='flex gap-8 XS:justify-center SM:justify-center SD:justify-center'>
        <ButtonDefault clickEvent={() => openUrl('https://github.com/Nicitaa')} buttonDefaultTitle='Get started'/>
       </div>
      </Text>
      
    </Features>






    <Feedbacks/>
    <Companys/>
    <CTA>
      <Card cardTitle={`Let's try our service now`} cardSubTitle={`Everything you need to accept card payments and 
      grow your business anywhere on the planet.`}/>
    </CTA>


    {modal && <Modal modalTitle={'Admin panel'} closeModal={closeModal}>
    <ModalChangeNumber/>
  </Modal>}
</>
)
}