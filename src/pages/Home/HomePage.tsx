import { CTA, Companys, Features, Feedbacks, Main, Numbers } from "./sections";


export function HomePage () {
return (
<div className="flex flex-col gap-16 mb-16">
  <Main/>
  <Numbers/>
  <Features/>
  <Feedbacks/>
  <Companys/>
  <CTA/>
</div>
)
}