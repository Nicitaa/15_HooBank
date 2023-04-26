import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()


export function useThemeContext() {
  return useContext(ThemeContext)
}

export function ThemeProvider({children}) {
  const [darkTheme,setDarkTheme] = useState(true)

  function toggleTheme() {
   setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
      <ThemeContext.Provider value={{toggleTheme,darkTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}