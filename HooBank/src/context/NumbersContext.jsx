import { createContext,useState } from "react";

export const NumbersContext = createContext({})



export function NumbersProvider({children}) {
  const [number, setNumber] = useState({
    userActive: "3800+",
    trustedByCompany: "230+",
    transaction: "$230M+"
  });
  
  const setNumbers = (newState) => {
    setNumber({
      ...number,
      ...(typeof newState === "function" ? newState(newState) : newState)
    });
  };

  return (
    <NumbersContext.Provider value={{number,setNumbers}}>
      {children}
    </NumbersContext.Provider>
  )
}