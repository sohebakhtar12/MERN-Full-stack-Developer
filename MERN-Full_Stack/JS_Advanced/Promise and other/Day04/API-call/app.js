const button = document.getElementById("btn")
const image = document.getElementById("img")

const api="https://dog.ceo/api/breeds/image/random"

fetch(api)
.then((res)=>res.json())
.then((data)=>{
    image.src=data.message
})


button.addEventListener("click" ,()=>{
fetch("https://dog.ceo/api/breeds/image/random")
.then((res)=>res.json())

.then((data)=>{
    image.src=data.message
})
})