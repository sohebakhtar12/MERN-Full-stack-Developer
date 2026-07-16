const api="https://dog.ceo/api/breeds/image/random"

const button=document.getElementById("btn")
const image=document.getElementById("img")

// button.addEventListener("click", async()=>{
//     const res=await fetch(api)
//     const data =await res.json()
//     image.src=data.message
// })


// async function APICall(){
//   try {
//      const resp=await fetch(api)
//     const data=await resp.json()
//     console.log(data)
//     image.src=data.message
// }
// catch(error){
//     console.log(error);
    
// }

// }

// APICall() 


// async function GetData(){
//    try {
//         const resp=await fetch(api)
//         const data=await resp.json()
//         image.src=data.message

// }
// catch(error){
//     console.log(error)
// }

// }

// GetData()



fetch(api)
.then((resp)=>resp.json())
.then((data)=>{
    image.src=data.message
})
.catch((error)=>console.log(error.message))