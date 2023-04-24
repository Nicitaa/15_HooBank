import { Number } from "../../components"

export function Numbers () {
return (
  <section className="py-4 mb-14 flex flex-wrap gap-3">
    <Number numberCount={'3800+'} numberTitle={'user active'}/>
    <Number numberCount={'230+'} numberTitle={'trusted by company'}/>
    <Number numberCount={'$230M+'} numberTitle={'transaction'}/>
  </section>
)
}