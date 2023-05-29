import { Container } from "../../../components";
import { feedbacks } from "../../../constant";
import { Feedback } from "../../components/";


export function Feedbacks () {
return (
 <Container className="flex flex-col gap-4 4K:gap-16">
  <div className="flex flex-col gap-4 text-center">
      <h1 className="title text-2xl font-bold
      LaptopL:text-5xl
      4K:text-8xl">
        What people are saying about us
      </h1>
      <p className="subTitle text-xl
      LaptopL:text-4xl
      4K:text-7xl">
        Everything you need to 
        accept card payments and grow your business anywhere on the planet.
      </p>
    </div>
    

  <div className="flex flex-wrap justify-around gap-4 Tablet:flex-row">
  {feedbacks.map(feedback => (
    <Feedback title={feedback.title} imgSrc={feedback.imgSrc} 
    authorTitle={feedback.authorTitle} authorSubTitle={feedback.authorSubTitle} key={feedback.imgSrc}/>
  ))}
  </div>

{/* <Glare glareClass={'glare-purple glare-right'}/> fix glare position absolute bug */}   
 </Container> 
)
}