

function Left({setText}) {

    
  return (
    <div style={{border:"2px solid black",height:"100vh",width:"48vw"}}>
         <input onInput={(e)=>{
            setText(e.target.value)
            
            }} type="text" />

          
    </div>
  )
}

export default Left
