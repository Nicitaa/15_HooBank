import { useThemeContext } from "./ThemeContxt"

export function Button () {
const {toggleTheme} = useThemeContext()

return (
  
  <button className="rounded outline-0 bg-orange-700 px-4 py-2" onClick={toggleTheme}>Toggle Theme</button>

)
}