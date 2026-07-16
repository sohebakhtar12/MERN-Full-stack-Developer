import { createContext, useState } from 'react'
import NavBaar from './Components/NavBaar'
import RigthDiv from './Components/RigthDiv'

import LeftDiv from './Components/LeftDiv'

export const MyContext=createContext();
function App() {

  const [theme,setTheme] = useState(true)
  const [text,setText]=useState("")
 

  return (
    <MyContext.Provider value={{theme,setTheme,text,setText}}>

    <NavBaar/>

    <div style={{display:"flex",justifyContent:"space-between"}}>
      <LeftDiv/>

      <RigthDiv/>
    </div>
     
    </MyContext.Provider>
  )
}

export default App
