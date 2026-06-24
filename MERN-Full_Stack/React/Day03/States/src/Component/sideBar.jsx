import { useState } from "react"


function sideBar() {
  
  const [isMouseInSidebar,setIsMouseInSidebar]=useState(false)

  return (
    <aside
    onMouseEnter={()=>{
      setIsMouseInSidebar(true)

    }}
    onMouseLeave={()=>{
      setIsMouseInSidebar(false)
    }}
    style={{
      height:"100vh",
      backgroundColor:"lightblue",
      width:isMouseInSidebar?"20vw":"10vw"
    }}
    >Sidebar</aside>
  )
}

export default sideBar
