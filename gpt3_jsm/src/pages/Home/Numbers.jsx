import { Number } from "../../components"

export function Numbers () {
return (
  <section className="py-4 flex flex-wrap gap-3">
    <Number number={'3800+'} numberTitle={'user active'}/>
    <Number number={'230+'} numberTitle={'trusted by company'}/>
    <Number number={'$230M+'} numberTitle={'transaction'}/>
  </section>
)
}