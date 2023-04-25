import { Number } from "../../components"
export {userActive,trustedByCompany,transaction}
var userActive = '3800+'
var trustedByCompany = '230+'
var transaction = '$230M+'



export function Numbers () {
 
return (
  <section className="py-4 mb-14 flex flex-wrap gap-3">
    <Number numberCount={userActive} numberTitle={'user active'}/>
    <Number numberCount={trustedByCompany} numberTitle={'trusted by company'}/>
    <Number numberCount={transaction} numberTitle={'transaction'}/>
  </section>
)
}