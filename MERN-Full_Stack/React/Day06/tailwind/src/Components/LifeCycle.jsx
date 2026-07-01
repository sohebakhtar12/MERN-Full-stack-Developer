import { useState } from "react"
import { useEffect } from "react"

function LifeCycle() {

    const[count,setCount]=useState(0)
    useEffect(()=>{
        // console.log("component Mounted")
        const id=setInterval(()=>{
            console.log("AD")
        },2000)

        return ()=>{
            // console.log("component Unmounted")
            clearInterval(id)
        }

        
    },[count])

  return (
    <>
    <div>Lorem ipsum dolor sit amet.</div>

    <button className="border" onClick={()=>{setCount(count+1)}}>increment</button>
    <h1>{count}</h1>
      
    </>
  )
}

export default LifeCycle
