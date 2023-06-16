import { Button, DownloadButton } from "../../../components";
import { Feature,Adventure } from "../../components";
import { adventures } from '../../../constant'

/* react-icons */
import { AiFillGithub } from 'react-icons/ai'
import { MdFormatListNumbered } from 'react-icons/md'


import useAdminModal from "../../../hooks/useAdminModal";

export function Features () {

  const adminModal = useAdminModal()

return (
<div className="relative overflow-x-hidden flex flex-col gap-16">
  {/* You do the business */}
<Feature title="You do the business,
we will handle the money."
subTitle="With the right credit card, you can 
improve your financial life by building credit, 
earning rewards and saving money. 
But with hundreds of credit cards on the market."
childrenText={<Button label='Edit numbers' onClick={adminModal.onOpen} icon={MdFormatListNumbered}/>}>
<div className='4K:flex 4K:flex-col 4K:gap-8'>
{adventures.map(adventure => (
<Adventure 
title={adventure.title} 
subTitle={adventure.subTitle}
svgId={adventure.svgId}
key={adventure.svgId}/>
))}
</div>
</Feature>



{/* Easy control */}
<Feature className="Tablet:flex-row-reverse"
title="Easily control your
billing & invoicing."
subTitle="Elit enim sed massa etiam. Mauris eu adipiscing 
ultrices ametodio aenean neque. Fusce ipsum orci 
rhoncus aliporttitor integer platea placerat."
childrenText={
<div className="flex gap-4">
  <DownloadButton svgId="get-it-in-apple-store" onClick={() => window.open('https://github.com/Nicitaa')}/>
  <DownloadButton svgId="get-it-in-google-play" onClick={() => window.open('https://github.com/Nicitaa')}/>
</div>
}>
<img className="hidden max-w-[50%] mx-auto Tablet:block" src="./bill.webp" alt="billing" />
</Feature>




{/* Find a better card deal */}
<Feature
title="Find a better card deal
in few easy step"
subTitle="Elit enim sed massa etiam. Mauris eu adipiscing 
ultrices ametodio aenean neque. Fusce ipsum orci 
rhoncus aliporttitor integer platea placerat."
childrenText={<Button label='My github' onClick={() => window.open('https://github.com/Nicitaa')} icon={AiFillGithub}/>}>
<img className="hidden max-w-[50%] mx-auto Tablet:block" src="./card.webp" alt="card"/>
</Feature>


<div className='glare glare-blue right-[-60%] top-[35%]
Tablet:right-[-60%]
LaptopL:right-[-55%]'/> 
<div className='glare glare-purple left-[-85%] top-[10%]
Tablet:left-[-70%]
LaptopL:left-[-60%]'/> 

</div>


)
}