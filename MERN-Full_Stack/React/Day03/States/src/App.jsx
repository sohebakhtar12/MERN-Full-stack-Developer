import { useState } from "react"
import Text from "./Component/Text"
import SideBar from "./Component/sideBar"
import Counter from "./Component/Counter"
function App() {

  const [darkmood,setDarkmood]=useState(true)

  return (
    <div  style={{backgroundColor:darkmood ? "gray":"white",height:"100vh",width:"100vw"}}>
      <nav>
                
        <button onClick={()=>{
          setDarkmood(!darkmood)
        }}
        >{darkmood ? "Light":"Dark"}</button>

      </nav>

      <div style={{display:"flex"}}>
        <SideBar/>
          <div>
            <Counter />
            <hr/>
            <Text/>

          </div>
      </div>
     
    </div>
  )
}

export default App
