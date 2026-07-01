
import {useState} from 'react'

function ConditionalRending() {

  const [showMain, setShowMain] = useState(true);

  const [showBg, setShowBg] = useState(false);
    

   return (
    <>
      <button onClick={()=>{
      setShowMain(!showMain)
    }}
     className="border">show/hide</button>

     <button className='border'
     onClick={()=>{
        setShowBg(!showBg)
     }}
     >ChangeColor</button>

    {showMain && <main>hello</main>}
    {showMain? <main>hello2</main>:null}

    <h1 
    // style={{backgroundColor:(showBg?"red" : "white")}}   css style

    className={"border " +(showBg ? "bg-red-700" : "bg-while")}
    
    >Apple</h1>
    
    </>
    
  )
}

export default ConditionalRending
