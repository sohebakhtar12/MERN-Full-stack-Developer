
import NavBaar from './Components/NavBaar'
import RigthDiv from './Components/RigthDiv'

import LeftDiv from './Components/LeftDiv'



function App() {



  return (
    
<>
    <NavBaar/>

    <div style={{display:"flex",justifyContent:"space-between"}}>

    
      <LeftDiv/>
      <RigthDiv/>
    </div>
 </>
     
   
  )
}

export default App
