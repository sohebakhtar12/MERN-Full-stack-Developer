import  { useState } from 'react'

function Counter() {

  const [count,setCount]=useState(0)
  return (

    <>
      <h1>{count}</h1>

      <button onClick={()=>{
        setCount(c=>c+1)
      }}>+</button>

      <button onClick={()=>{
        setCount(0)
      }}>reset</button>

      <button onClick={()=>{
        setCount(s=>s-1)
      }}>-</button>
      
      
    </>
  )
}

export default Counter