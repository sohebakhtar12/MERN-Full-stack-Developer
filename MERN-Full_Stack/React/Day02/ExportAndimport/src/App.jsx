import Nav from "./Components/Navbar"
import Footer from "./Components/footer"
import Sidebar from "./Components/sidebar"
import Main from "./Components/Main"

function App() {


  return (
    <>
     <Nav/>

     <div style={{display:"flex"}}>

     <Sidebar/>
     <Main/>
     </div>

     <Footer/>
     

     
     
    </>
  )
}

export default App
