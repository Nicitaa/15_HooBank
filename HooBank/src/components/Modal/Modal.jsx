import { useContext, useState } from "react";
import { Error } from ".."
import { NumbersContext } from "../../context/NumbersContext";

export function Modal ({modalTitle}) {
  //context for changing numbers
  const { setNumbers,number } = useContext(NumbersContext);
  //states for error
  const [errorTitle,setErrorTitle] = useState('')
  const [errorSubTitle,setErrorSubTitle] = useState('')
  const [showError,setShowError] = useState(false)
  //values in inputs
  const [inputUserActive,setInputUserActive] = useState('')
  const [inputTrustedByCompany,setInputTrustedByCompany] = useState('')
  const [inputTransaction,setInputTransaction] = useState('')
  const changeNumbersHandler = (e) => {
    e.preventDefault();
    
    if (inputUserActive.length === 0) {
          setShowError(true)
          setErrorTitle('Enter user active')
          setErrorSubTitle('Common reason for it you not fill user active field')
          setTimeout(() => setShowError(false),5000)
        }
        else if (inputTrustedByCompany.length === 0) {
          setShowError(true)
          setErrorTitle('Enter trusted by company')
          setErrorSubTitle('Common reason for it you not fill trusted by company field')
          setTimeout(() => setShowError(false),5000)
        }
        else if (inputTransaction.length === 0) {
          setShowError(true)
          setErrorTitle('Enter transaction')
          setErrorSubTitle('Common reason for it you not fill transaction field')
          setTimeout(() => setShowError(false),5000)
        }
        else {
          
        }
      setNumbers({
      userActive: inputUserActive,
      trustedByCompany:inputTrustedByCompany,
      transaction:inputTransaction });
  };





  

return (
<div className="fixed bg-black/[0.6] top-0 right-0 left-0 bottom-0">
  <form className="fixed w-[500px] p-5 bg-gray-400 rounded top-10 left-1/2 -translate-x-1/2"
  onSubmit={changeNumbersHandler}>
    <h1 className="text-2xl font-bold text-center mb-8">{modalTitle}</h1>
    <div className="flex flex-col gap-4">
    <input className="border rounded outline-0 w-full px-2 py-2" type="text"
    placeholder={`User active ${number.userActive}`}
    value={inputUserActive} onChange={e => setInputUserActive(e.target.value)}/>
    <input className="border rounded outline-0 w-full px-2 py-2" type="text" 
    placeholder={`Trusted by company ${number.trustedByCompany}`}
    value={inputTrustedByCompany} onChange={e => setInputTrustedByCompany(e.target.value)}/>
     <input className="border rounded outline-0 w-full px-2 py-2" type="text" 
     placeholder={`Transaction ${number.transaction}`}
    value={inputTransaction} onChange={e => setInputTransaction(e.target.value)}/>
    <button className="border rounded outline-0 bg-gray-300 text-gray-950 font-bold w-[140px] 
    h-[40px]" type="submit">
     Contrast</button>
    </div>
  </form>
  {showError && <Error errorTitle={errorTitle} errorSubTitle={errorSubTitle}/>}
</div>
)
}