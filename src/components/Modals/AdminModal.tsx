import { useState } from "react";
import { Button, Input, Modal } from "..";
import { numbers } from "../../constant";

export function AdminModal () {
  // it possible to optimize it to prevent too many re-renders

  const [changed,setChanged] = useState(false)

  function setNumbers() {
    localStorage.setItem('numbers',JSON.stringify(numbers))
    
  }


  
  

  return (
    <Modal label="Admin panel">
  <div className="py-4 pt-8 w-full flex flex-col gap-y-8">
  {numbers.map(item => {
    const [value,setValue] = useState('')
    item.number=value
    return <Input label={item.label}
     value={value} onChange={(value) => setValue(value)} key={item.label} placeholder={`${item.number}`}/>
  })}
  </div>
  <Button className="max-w-[100%] w-full" label="Change" 
  onClick={() => setNumbers()}/>
</Modal>
)
}