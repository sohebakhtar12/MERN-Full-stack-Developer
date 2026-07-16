import { useContext } from "react"
import { CounterContext } from "../Utils/CounterContext"


function NavBaar() {

  const {count,setCount}=useContext(CounterContext)
 
  return (
    <>

    <nav style={{display:"flex", justifyContent:"space-between",backgroundColor:"AccentColor",height:"7vh",alignItems:"center"}}>
      Navbaar
   

       <button onClick={()=>{
        setCount(count+1)
      }}>+</button>
      

    </nav>
      
    </>
  )
}

export default NavBaar
