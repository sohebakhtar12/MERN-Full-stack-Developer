

function Navbar({setDarkMode}) {
  return (
    <div style={{display:"flex",gap:"10px",height:"10vw",backgroundColor:"lightblue",alignItems:"center"}}>
        <button style={{height:"30px",width:"70px",marginLeft:"10px"}} onClick={()=>{
            setDarkMode(false)
        }}>Light</button>


        <button style={{height:"30px",width:"70px",marginLeft:"10px"}} onClick={()=>{
            setDarkMode(true)

        }}>Dark</button>
      
    </div>
  )
}

export default Navbar
