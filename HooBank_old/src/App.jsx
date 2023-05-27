import { Routes,Route } from 'react-router-dom'
import {Header,Footer} from './components'
import { Home,FeaturesPage,ProductPage,ClientsPage } from './pages'


const App = () => {
  return (
    <div className="max-w-[100vw] min-h-[100vh] overflow-x-hidden">
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/features' element={<FeaturesPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/clients' element={<ClientsPage/>}/>
      </Routes>
    <Footer/>
    </div>
  )
}

export default App