import { Routes,Route } from 'react-router-dom'
import {Navbar} from './components'
import { Home,FeaturesPage,ProductPage } from './pages'


const App = () => {
  return (
    <div className="container px-16 min-h-[100vh]">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/features' element={<FeaturesPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/clients' element={<ClientsPage/>}/>
      </Routes>
    </div>
  )
}

export default App