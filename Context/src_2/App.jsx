import './App.css'
import { ThemeProvider } from './ThemeContxt'
import { FunctionContextComponent } from './FunctionContextComponent'
import { Button } from './button'



function App() {


return (
<div className='App'>
 <ThemeProvider>
  <FunctionContextComponent/>
  <Button/>
 </ThemeProvider>
</div>
  )

}

export default App
