

import  { useContext } from "react"
import { CounterContext} from "../Utils/CounterContext"

function LeftDiv() {

  const{count}=useContext(CounterContext)
 
  return (
   <div
  
>
     
         <h2>Story</h2>

      <p>
        Once upon a time there was a boy who wanted to become a Full Stack
        Developer. Every day he practiced React and JavaScript.
      </p>
      <hr />
      <h1>{count}</h1>

      
     
     </div>
  )
}

export default LeftDiv
