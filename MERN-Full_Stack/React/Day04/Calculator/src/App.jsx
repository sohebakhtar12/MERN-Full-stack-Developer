import { useState } from "react"
import Calculeter from "./Component/Calculeter"
import Form from "./Component/form"
import Left from "./Component/Left"
import Right from "./Component/Right"
import Navbar from "./Component/Navbar"
import Mainbox from "./Component/Mainbox"

import LeftBox from "./Component/to-do-list/Left"
import RightBox from "./Component/to-do-list/Right"

function App() {

  const [text,setText]=useState("")
  const [val,setVal]=useState("")

  const [darkMood,setDarkMood]=useState(false)
  return (
    <> 
      {/* <Form/>
      <Calculeter/> */}
     

      {/* <div style={{display:"flex",gap:"5px"}}>
        <Left setText={setText}/>
        <Right text={text}/>
      </div> */}

      {/* <div>
        <Navbar setDarkMode={setDarkMood}/>
        <Mainbox darkMood={darkMood}/>
      </div> */}

      <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
        <LeftBox setVal={setVal}/>
        <RightBox val={val} />
      </div>


    </>
  )
}

export default App
