import {Routes,Route,BrowserRouter,Link} from "react-router-dom"
import Home from "./Components/Home"
import Service from "./Components/Service"
import Expre from "./Components/Expre"
import Todos from "./Components/Todos"
import Character from "./Components/Character"
import UserAPI from "./Components/userAPI"
function App() {
  return (
    <> 
    <nav>
      <Link to="/Home">Home</Link>
      <Link to="/Service">Service</Link>
      <Link to="/Expre">Expre</Link>
    </nav>

    <Routes>
      <Route path="/Home" element={<Home/> }/>
      <Route path="/Service" element={<Service/> }/>
      <Route path="/Expre" element={<Expre/> }/>
    </Routes>

    
    
      
    </>
  )
}

export default App

//---------------------------------------------------------------




// function App() {
//   return (
//     <>

    
//     <nav style={{display:"flex",justifyContent:"end", alignItems:"center",backgroundColor:"red",height:"10vh",gap:"10px"}}>
//       <Link to="/Character">Character</Link>
//       <Link to="/Todos">Tode</Link>
//       <Link to="/userAPI">User</Link>
//     </nav>
    

//     <Routes>
//       <Route path="/Character" element={<Character/> }/>
//       <Route path="/userAPI" element={<UserAPI/> }/>
//       <Route path="/Todos" element={<Todos/> }/>
//     </Routes>
      
//     </>
//   )
// }

// export default App

