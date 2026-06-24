import { useState } from "react"
import Text from "./Component/Text"
function App() {

  const [darkmood,setDarkmood]=useState(true)

  return (
    <div  style={{backgroundColor:darkmood ? "gray":"white",height:"100vh",width:"100vw"}}>
      <nav>
                
        <button onClick={()=>{
          setDarkmood(!darkmood)
        }}
        >{darkmood ? "Dark":"Light"}</button>

      </nav>





      <Text/>
    </div>
  )
}

export default App
