import  {useState} from 'react'

function Form() {
//there are 3 type to used useState
  
   //type 1 normal way

    // let [val,setVal]=useState("")
    // let[pass,setPass]=useState("")
    // let [email,setEmail]=useState("")
   
   //type 2 using object 

    // const [data,setData]=useState({
    //     name : "",
    //     email :"",
    //     pass :""
    // })

    //type 3 using Array

    const[data,setData]=useState(["","",""])

  return (

    <>

    <div>
        <input onInput={(e)=>{
            // setVal(e.target.value)


            // setData({
            //     ...data,
            //     name: e.target.value
            // })

            let arr=[e.target.value,...data]
            arr[0]=e.target.value
            setData(arr)

        }} type="text" />

        <input onInput={(e)=>{
            //type 1
            // setEmail(e.target.value)

            //type 2
            // setData({
            //     ...data,
            //     email : e.target.value
            // })

            //type 3
            let arr=[...data]
            arr[1]=e.target.value
            setData(arr)


        }} type="text"/>

        <input onInput={(e)=>{
            // setPass(e.target.value)

            // setData({
            //     ...data,
            //     pass : e.target.value
            // })

            let arr=[...data]
            arr[2]=e.target.value
            setData(arr)
        }} type="text" />

        <button onClick={()=>{
            console.log(data)
        }}>Submit</button>

        

    </div>

    
    </>
  )
}

export default Form