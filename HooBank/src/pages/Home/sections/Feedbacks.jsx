import { Feedback } from "../../../components/Feedback/Feedback";

export function Feedbacks () {
return (
<section className="py-4 mb-32 flex gap-3">
<div className="flex">
  <h1 className="title">What people are
  saying about us</h1>
  <p className="subTitle">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
</div>

<div>
  <Feedback/>
</div>

</section>
)
}