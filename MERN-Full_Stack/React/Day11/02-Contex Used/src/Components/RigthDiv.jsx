
import { useContext } from "react"

import { CounterContext } from "../Utils/CounterContext"

function RigthDiv() {

  const {count} = useContext(CounterContext)

 
  return (
      <div
  
>
     
        <h2>Story</h2>
        <h1>{count}</h1>

      <p>
        React Context API allows multiple components to share the same data
        without passing props manually.
      </p>   

      
    </div>
  )
}

export default RigthDiv
