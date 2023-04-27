import { Feedback } from "../../../components/Feedback/Feedback";

export function Feedbacks () {
return (
<section className="py-4 mb-32 flex flex-col gap-3">
<div className="flex mb-12">
  <h1 className="title w-[50%] text-5xl font-bold leading-relaxed ">What people are<br/>
  saying about us</h1>
  <p className="subTitle w-[50%] text-xl flex items-center">Everything you need to accept card payments <br/>
  and grow your business anywhere on the planet.</p>
</div>

<div className="flex justify-center flex-wrap px-12 gap-12">
  <Feedback feedbackTitle={`Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.`}
  imgUrl={'./people01.webp'} feedbackAuthor={'Herman Jensen'} feedbackMajor={'Founder & Leader'}/>
  <Feedback feedbackTitle={`Money makes your life easier. If you're lucky to have it, you're lucky .`}
  imgUrl={'./people02.webp'} feedbackAuthor={'Steve Mark'} feedbackMajor={'Founder & Leader'}/>
  <Feedback feedbackTitle={`It is usually people in the money business, finance, and international trade that are really rich.`}
  imgUrl={'./people03.webp'} feedbackAuthor={'Kenn Gallagher'} feedbackMajor={'Founder & Leader'}/>
</div>

</section>
)
}