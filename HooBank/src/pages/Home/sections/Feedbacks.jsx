import { Glare } from "../../../components";
import { Feedback } from "../../../components/Feedback/Feedback";

export function Feedbacks () {
return (
<section className="py-4 mb-24 flex flex-col gap-3">
<div className="flex mb-12 XS:text-center XS:flex-col SM:flex-col SM:justify-center SM:pb-4 SM:text-center
SD:flex-col">
  <h1 className="title w-[50%] text-5xl font-bold leading-relaxed pb-8 XS:text-[2em] XS:min-w-full 
  SM:min-w-full SM:text-4xl SD:w-full SD:text-center">What people are<br/>
  saying about us</h1>
  <p className="subTitle w-[50%] text-xl flex items-center XS:min-w-full XS:text-[1em] SM:justify-center 
  SM:min-w-full SD:w-full SD:text-center SD:justify-center">Everything you need to accept card payments <br/>
  and grow your business anywhere on the planet.</p>
</div>

<div className="flex justify-center flex-wrap px-12 gap-12 XS:p-2 XS:flex-col SM:flex-col
SD:flex-col SD:p-4 SD:gap-14">
  <Feedback feedbackTitle={`Money is only a tool. It will take you wherever you wish, 
  but it will not replace you as the driver.`}
  imgUrl={'./people01.webp'} feedbackAuthor={'Herman Jensen'} feedbackMajor={'Founder & Leader'}/>
  <Feedback feedbackTitle={`Money makes your life easier. If you're lucky to have it, you're lucky.`}
  imgUrl={'./people02.webp'} feedbackAuthor={'Steve Mark'} feedbackMajor={'Founder & Leader'}/>
  <Feedback feedbackTitle={`It is usually people in the money business, finance, and international 
  trade that are really rich.`}
  imgUrl={'./people03.webp'} feedbackAuthor={'Kenn Gallagher'} feedbackMajor={'Founder & Leader'}/>
</div>


{/* <Glare glareClass={'glare-purple glare-right'}/> fix position absolute bug */}


</section>
)
}