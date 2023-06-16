/* react */
import { Route, Routes } from "react-router-dom"
/* components */
import { Navbar, Footer, AdminModal } from './components/'
/* sections */
import { HomePage,AboutUsPage,FeaturesPage,SolutionPage, Error404Page } from "./pages"
import { NumbersProvider } from "./context"

function App() {

  return (
    <>
     <NumbersProvider>
      <Navbar/>
          <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/about-us" element={<AboutUsPage/>}/>
           <Route path="/features" element={<FeaturesPage/>}/>
           <Route path="/solution" element={<SolutionPage/>}/>
           <Route path="/*" element={<Error404Page/>}/>
         </Routes>
      <Footer/>
     
        {/* Modals */}
        <AdminModal/>
      
      </NumbersProvider>
    </>
  )
}

export default App
