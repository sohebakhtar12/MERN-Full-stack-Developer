import { Link,NavLink} from "react-router-dom"

function Navbar() {
  return (
    // <nav>
    //     <Link to={"/A"}>A</Link>
    //     <Link to={"/B"}>B</Link>
    //     <Link to={"/C"}>C</Link>
      
    // </nav>
<>
    <NavLink className={({isActive})=>{

        if(isActive){
            return "bg-red-400"
        }

    }} to={"/A"}>A</NavLink>

    <NavLink to={"/B"} className={({isActive})=>{

        if(isActive){
            return "bg-red-400"
        }

    }}>B</NavLink>

    <NavLink to={"/C"} className={({isActive})=>{

        if(isActive){
            return "bg-red-400"
        }

    }}>C</NavLink>
</>

  )
}

export default Navbar
