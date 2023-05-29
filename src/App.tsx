/* react */
import { Route, Routes } from "react-router-dom"
/* components */
import { Navbar, Footer, AdminModal } from './components/'
/* sections */
import { HomePage,ContactPage } from "./pages"

function App() {

  return (
    <>
      <Navbar/>
          <Routes>
           <Route path="/" element={<HomePage/>}/>
            {/* <Route path="/contact" element={<Contact/>}/> */}
         </Routes>
      <Footer/>
      {/* Modals */}
      <AdminModal/>
    </>
  )
}

export default App
