import Apple from "./Components/Apple"
import { useState } from "react";
import ConditionalRending from "./Components/conditionalRending"
import LifeCycle from "./Components/LifeCycle"

function App() {

  const[show,setShow]=useState(true);
  return (
    <>
      <ConditionalRending/> 

      <hr></hr>


      <button onClick={()=>{
        setShow(!show)
      }}
      className="border">Toggle</button>

        {show && <LifeCycle/> } 
    </>
    
  )
}

export default App
