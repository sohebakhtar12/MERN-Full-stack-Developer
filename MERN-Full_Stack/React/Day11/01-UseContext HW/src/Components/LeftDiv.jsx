import { useContext } from "react"
import { MyContext } from "../App"
import React from "react"

function LeftDiv() {
  const {theme,text,setText}=useContext(MyContext)
  return (
   <div
  style={{
    backgroundColor: theme ? "grey" : "black",
    color: "white",height:"80vh",width:"49vw",border:"2px solid black"
    ,borderRadius:"10px",

  }}
>
     
         <h2>Story</h2>

      <p>
        Once upon a time there was a boy who wanted to become a Full Stack
        Developer. Every day he practiced React and JavaScript.
      </p>
      <hr />

      <input type="text" placeholder="Type here..." value={text} onChange={(e)=>setText(e.target.value)}/>
     
     </div>
  )
}

export default React.memo (LeftDiv)
