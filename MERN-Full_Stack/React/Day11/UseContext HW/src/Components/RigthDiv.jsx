
import { useContext } from "react"
import { MyContext } from "../App"
function RigthDiv() {

  const{theme,text}=useContext(MyContext)
  return (
    <div
    style={{
    backgroundColor: theme ? "grey" : "black",
    color: "white",
  }}
>
      <div style={{height:"80vh",width:"49vw",border:"2px solid black"}}>
        <h2>Story</h2>

      <p>
        React Context API allows multiple components to share the same data
        without passing props manually.
      </p>

      <hr />
       
       <h3>{text}</h3>

      </div>
    </div>
  )
}

export default RigthDiv
