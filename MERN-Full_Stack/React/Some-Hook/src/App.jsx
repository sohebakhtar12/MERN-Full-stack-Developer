
import Counter from "./Component/Counter"
import { useContext } from "react"
import { ConterContext } from "./Context/Counter"
 
function App() {
  const counterState=useContext(ConterContext)
  console.log(counterState)


  return (
    <>
     <h1>Count is {counterState.count}</h1>
     <Counter/>
     <Counter/>
     <Counter/>
     <Counter/>
    </>
  )
}

export default App
