import { useState } from "react"

function Counter() {

    const [count,setCount]=useState(0)
  return (
    <div style={{marginLeft:"10px"}}>
        <h2>{count}</h2>

    <div>
        <button
        onClick={()=>{
            setCount(count+1)
        }}>+</button>

        <button
        onClick={()=>{
            setCount(0)

        }}>Resat</button>

        <button 
        onClick={()=>{
            if(count>0){
              setCount(count-1)
            }
        }}>-</button>

    </div>

    </div>
    
   

  )
}

export default Counter