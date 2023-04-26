import { useThemeContext } from "./ThemeContxt"

export function FunctionContextComponent () {
const {darkTheme} = useThemeContext()
const themeStyles ={
  backgroundColor:darkTheme ? "#333" : "#ccc",
  color: darkTheme ? '#ccc' : '#333',
  padding:'2rem',
  margin:'2rem'
}
  return (
    <>
    <div style={themeStyles}>Function Theme</div>
    </>
)
}