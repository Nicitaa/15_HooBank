import { useContext, useState } from "react";
import {userActive,trustedByCompany,transaction} from './../../pages/Home/Numbers'
import { Error } from "../../components"
import { shitContext } from "./../../pages/Home/Home";

//let react somehow understand that I change data to change it in Numbers

export function Modal ({modalTitle}) {
  const { setContextState } = useContext(shitContext);
  const [inputUserActive,setInputUserActive] = useState('')
  const [inputTrustedByCompany,setInputTrustedByCompany] = useState('')
  const [inputTransaction,setInputTransaction] = useState('')
  
  const changeNumbersHandler = (e) => {
    e.preventDefault();

    if (userActive.length === 0) {
          console.log('enter user active')
          return <Error errorTitle={'Enter user active'}/>
        }
        if (trustedByCompany.length === 0) {
          return <Error errorTitle={'Enter trusted by company'}/>
        }
        if (transaction.length === 0) {
          return <Error errorTitle={'Enter transaction'}/>
        }
        
    setContextState({ userActive: inputUserActive });
    console.log("Modal - newUserActive changed");
  };





  

return (
<div className="fixed bg-black/[0.6] top-0 right-0 left-0 bottom-0">
  <form className="fixed w-[500px] p-5 bg-gray-400 rounded top-10 left-1/2 -translate-x-1/2"
  onSubmit={changeNumbersHandler}>
    <h1 className="text-2xl font-bold text-center mb-8">{modalTitle}</h1>
    <div className="flex flex-col gap-4">
    <input className="border rounded outline-0 w-full px-2 py-2" type="text"
    placeholder={`User active ${userActive}`}
    value={inputUserActive} onChange={e => setInputUserActive(e.target.value)}/>
    <input className="border rounded outline-0 w-full px-2 py-2" type="text" 
    placeholder={`Trusted by company ${trustedByCompany}`}
    value={inputTrustedByCompany} onChange={e => setInputTrustedByCompany(e.target.value)}/>
     <input className="border rounded outline-0 w-full px-2 py-2" type="text" 
     placeholder={`Transaction ${transaction}`}
    value={inputTransaction} onChange={e => setInputTransaction(e.target.value)}/>
    <button className="border rounded outline-0 bg-gray-300 text-gray-950 font-bold w-[140px] 
    h-[40px]" type="submit">
     Contrast</button>
    </div>
  </form>
</div>
)
}