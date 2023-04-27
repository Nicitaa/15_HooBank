/* react */
import { useContext } from 'react'
/* sections */
import {Main,Numbers,Features,Feedbacks, Companys} from './'
/* context */
import { ModalContext } from '../../context'
/* components */
import { Text,Feature,ButtonDefault,Modal,ModalChangeNumber, Image } from "../../components"

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

    <div className="flex flex-col max-w-[50%]">
  <Text title={
    <h1>You do the business,
    we will handle the money.</h1>}
    subtitle={
      <p>With the right credit card, y
        ou can improve your financial life by building credit, 
        earning rewards and saving money. 
        But with hundreds of credit cards on the market.</p>
    }/>
    <div className="flex gap-4">
      <ButtonDefault clickEvent={() => openUrl('https://github.com/Nicitaa')} buttonDefaultTitle={<h1>My github</h1>}>
      <svg className='w-6 h-6'>
        <use xlinkHref="./sprite.svg#github" />
      </svg>
      </ButtonDefault>
      <ButtonDefault clickEvent={() => openModal()} buttonDefaultTitle={<h1>Admin panel</h1>}/>
    </div>
  </div>



  <div className="flex flex-col gap-4 max-w-[50%]">
  <Feature svgUrl={'./sprite.svg#star'} featureTitle={'Rewards'}
  featureSubTitle={`
  The best credit cards offer some tantalizing 
  combinations of promotions and prizes`}/>
   <Feature svgUrl={'./sprite.svg#shield'} featureTitle={'100% Secured'}
  featureSubTitle={`
  We take proactive steps make sure your information 
  and transactions are secure.`}/>
   <Feature svgUrl={'./sprite.svg#telegram'} featureTitle={'Balance Transfer'}
  featureSubTitle={`
  A balance transfer credit card can save you a lot of 
  money in interest charges.`}/>
  </div>

    </Features>









      {/* Easily control */}
    <Features>
      <Image imageClass='w-max-[50%]' imgUrl='./bill.webp'/>
      


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
       <div className='flex gap-8'>
        <svg className='w-[20%] h-[50%] cursor-pointer' onClick={() => openUrl('https://github.com/Nicitaa')}>
          <use xlinkHref='./sprite.svg#get-it-in-apple-store' />
        </svg>
        <svg className='w-[20%] h-[50%] cursor-pointer' onClick={() => openUrl('https://github.com/Nicitaa')}>
          <use xlinkHref='./sprite.svg#get-it-in-google-play'/>
        </svg>
       </div>
      </Text>
      
    </Features>












          {/* Find a better card */}
          <Features featureClassName={'flex-row-reverse'}>
      <Image imageClass='w-max-[50%]' imgUrl='./card.webp'/>
      


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
       <div className='flex gap-8'>
        <ButtonDefault clickEvent={() => openUrl('https://github.com/Nicitaa')} buttonDefaultTitle='Get started'/>
       </div>
      </Text>
      
    </Features>






    <Feedbacks/>
    <Companys/>

    {modal && <Modal modalTitle={'Admin panel'} closeModal={closeModal}>
    <ModalChangeNumber/>
  </Modal>}
</>
)
}