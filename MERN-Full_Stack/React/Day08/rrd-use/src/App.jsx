  
import { Route,Routes } from "react-router-dom"
import A from "./Component/A"
import B from "./Component/B"
import C from "./Component/C"
import Navbar from "./Component/Navbar"


function App() {


  return (
    
    <>

    <Routes>
        <Route path="/A" element={<>
        <Navbar/>
        <A/>
        
        </>} />
        <Route path="/B" element={<>
        <Navbar/>
        <B/>
        
        </>} />
        <Route path="/C" element={<>

        <Navbar/>
        <C/>
        
        </>} />
    </Routes>
      
    </>
  )
}

export default App
