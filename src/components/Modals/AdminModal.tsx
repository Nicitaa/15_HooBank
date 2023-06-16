import { useState,useContext } from "react";

import { Button, Input as InputNumber, ModalContainer } from "..";
import { NumbersContext } from "../../context/NumbersContext";
import useAdminModal from "../../hooks/useAdminModal";
import { useMessage } from "../../hooks/useMessage";

export function AdminModal() {

  const adminModal = useAdminModal()
  const message = useMessage()

  const { numberItemsState, setNumberItemsState } = useContext(NumbersContext)
  const [inputValues, setInputValues] = useState<string[]>(["","",""]) //initial value for controlled inputs

  
  
  function handleInputChange(value:string,index:number) {
    const updatedInputValues:string[] = [...inputValues]
    updatedInputValues[index] = value
    setInputValues(updatedInputValues)
  }

  function handleChange() {
    const updatedNumbers = numberItemsState.map((numberItemState, index) => ({
      ...numberItemState,
      number: inputValues[index],
    }))
    setNumberItemsState(updatedNumbers)
    localStorage.setItem("numberItems", JSON.stringify(updatedNumbers))
    // message.showMessage('success')
    message.setStatus(false,true) //success
    message.showMessage()
  }

  if (!numberItemsState || numberItemsState.length === 0) {
    message.setStatus(true,false) //error
    message.showMessage()
    return (
      <>
      <ModalContainer label="Admin panel" onClose={adminModal.onClose} isOpen={adminModal.isOpen}>
        <div>No numbers available.</div>
      </ModalContainer>
      </>
    );
  }

  return (
    <ModalContainer label="Admin panel" onClose={adminModal.onClose} isOpen={adminModal.isOpen}>
      <div className="py-4 w-full flex flex-col gap-y-8
      LaptopL:gap-y-12
      4K:gap-y-32">
        {numberItemsState.map((numberItemState, index:number) => (
          <InputNumber label={numberItemState.label}
            value={inputValues[index]}
            onChange={value => handleInputChange(value,index)}
            key={numberItemState.label}
            placeholder={`${numberItemState.number}`}/>
        ))}
      </div>
      <Button className="!max-w-[100%] w-full 4K:p-12" label="Change" onClick={handleChange}/>
    </ModalContainer>
  );
}