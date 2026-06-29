import{ useState } from 'react'

function Calculeter() {
    
    const [val,setVal]=useState("0")  
    let operators = ["+","-","*","/"]

    function btnClickHandle(e){


        let enteredValue=e.target.innerText 

        if(val == 0 && operators.includes(enteredValue))return

        if(operators.includes(val[val.length-1]) 
            && operators.includes(enteredValue) 
            && val[val.length-1]==enteredValue){
            return
        }
        if(operators.includes(val[val.length-1])
            && operators.includes(enteredValue) 
            && val[val.length-1]!=enteredValue){
            setVal(val.slice(0,val.length-1)+enteredValue)

            return
        }

        if(val==0){
            setVal(enteredValue)
        }else{
            setVal(val+enteredValue)
        }
    }

  return (
    <div id='screen'>
        <div id='calc'>Calculater

            <div id='display'>
                {val}
                <p>---------------------</p>
            </div >

            <div id='btn-container'>

                <button onClick={btnClickHandle} className='btn'>0</button>
                <button onClick={btnClickHandle} className='btn'>+</button>
                <button onClick={btnClickHandle} className='btn'>-</button>
                <button className='btn' 
                onClick={()=>{
                    setVal(0)
                }
                }>C</button>

                <button onClick={btnClickHandle} className='btn'>7</button>
                <button onClick={btnClickHandle} className='btn'>8</button>
                <button onClick={btnClickHandle} className='btn'>9</button>
                <button onClick={btnClickHandle} className='btn'>*</button>


                <button onClick={btnClickHandle} className='btn'>4</button>
                <button onClick={btnClickHandle} className='btn'>5</button>
                <button onClick={btnClickHandle} className='btn'>6</button>
                <button onClick={btnClickHandle} className='btn'>/</button>


                <button onClick={btnClickHandle} className='btn'>1</button>
                <button onClick={btnClickHandle} className='btn'>2</button>
                <button onClick={btnClickHandle} className='btn'>3</button>
                <button className='btn' 
                onClick={()=>{
                    let ans=eval(val)
                    setVal(ans)
                }}>=</button>


            </div>
        </div>

    </div>
  )
}

export default Calculeter