import { useState } from "react";
import { Button, Input, Modal } from "..";
import { numbers } from "../../constant";

export function AdminModal () {

  function setNumbers() {
    console.log(numbers)
  }

return (
<Modal label="Admin panel">
  <div className="py-4 pt-8 w-full flex flex-col gap-y-8">
  {numbers.map(item => {
    const [number,setNumber] = useState('')
    
    return <Input label={item.label} value={number} onChange={setNumber} key={item.label} placeholder={`${item.number}`}/>
  })}
  </div>
  <Button className="max-w-[100%] w-full" label="Change" onClick={setNumbers}/>
</Modal>
)
}