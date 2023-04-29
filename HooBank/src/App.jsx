import { Routes,Route } from 'react-router-dom'
import {Navbar} from './components'
import { Home,FeaturesPage,ProductPage,ClientsPage } from './pages'


const App = () => {
  return (
    <div className="container px-16 SD:px-0">
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