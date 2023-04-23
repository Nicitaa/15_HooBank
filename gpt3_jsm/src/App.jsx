import { Routes,Route } from 'react-router-dom'
import {Navbar} from './components'
import { Home } from './pages'


const App = () => {
  return (
    <div className="px-16">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App