import { useContext } from "react"
import { MyContext } from "../App"

function NavBaar() {
  const { setTheme } = useContext(MyContext)
  return (
    <>

    <nav style={{display:"flex", justifyContent:"space-between",backgroundColor:"AccentColor",height:"7vh",alignItems:"center"}}>
      Navbaar
   

        <div>
          <button onClick={()=>setTheme(true)}>Light🌞</button>
          <button onClick={()=>setTheme(false)}>Dark🌚</button>
        </div>
   

    </nav>
      
    </>
  )
}

export default NavBaar
