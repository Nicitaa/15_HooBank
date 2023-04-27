/* react */
import React from 'react'
import { useContext, useState } from "react";
/* context */
import { NumbersContext,MessageContext } from "../../../../../context";
/* UI/UX */
import { ButtonDefault, Input } from '../../../..';





export function ModalChangeNumber () {

   //context for changing numbers
   const { setNumbers,number } = useContext<any>(NumbersContext);
   const {setShowMessage,setMessageType,setMessageTitle,setMessageSubTitle} = useContext(MessageContext)
   
   //values in inputs
   const [inputUserActive,setInputUserActive] = useState('')
   const [inputTrustedByCompany,setInputTrustedByCompany] = useState('')
   const [inputTransaction,setInputTransaction] = useState('')
   const changeNumbersHandler = (e:React.FormEvent<HTMLFormElement>) => {
    
    const inputUserActiveName= 'user active'
    const inputTrustedByCompanyName= 'trusted by company'
    const inputTransactionName= 'transactions'

    e.preventDefault();
     
     function wait() {
       setTimeout(() => setShowMessage(false),5000)
     }
    
     setShowMessage(true)

     function successMessage() {
      setMessageType('success')
      setMessageTitle('Data changed')
      setMessageSubTitle('Enjoy!')
      wait()
     }
     function errorMessage(inputName: string) {
      setMessageType('error')
      setMessageTitle(`Enter ${inputName}`)
      setMessageSubTitle(`Common reason for it you not fill ${inputName} field`)
      wait()
     }


     if (inputUserActive.length === 0) {
        errorMessage(inputUserActiveName)
         }
         else {
          successMessage()
          setNumbers({
          userActive: inputUserActive
          })
         }
        
         if (inputTrustedByCompany.length === 0) {
          errorMessage
         }
         else {
          successMessage()
          setNumbers({
            trustedByCompany:inputTrustedByCompany
          })
         }
         if (inputTransaction.length === 0) {
          errorMessage
         }
         else {
          successMessage()
          setNumbers({
            transaction:inputTransaction
          })
         }
        
           
            
           
            
         
 
       
   }



return (
<>
  <form className='flex flex-col gap-4' onSubmit={changeNumbersHandler} onClick={e => e.stopPropagation()}>
  
  
  <Input inputValue={inputUserActive} inputOnChange={setInputUserActive} 
  inputPlaceholder={`User active ${number.userActive}`}/>
  <Input inputValue={inputTrustedByCompany} inputOnChange={setInputTrustedByCompany} 
  inputPlaceholder={`Trusted by company ${number.trustedByCompany}`}/>
  <Input inputValue={inputTransaction} inputOnChange={setInputTransaction} 
  inputPlaceholder={`Transaction ${number.transaction}`}/>
  <ButtonDefault buttonDefaultTitle={'Update'} clickEvent={changeNumbersHandler}/>
  </form>
</>
)
}