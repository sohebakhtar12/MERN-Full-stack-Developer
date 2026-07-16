const darkMood=document.getElementById("dark")
const darklight=document.getElementById("light")
const mainbox=document.getElementById("text")
const input=document.getElementById("ip")
const heading=document.getElementById("head")


 .addEventListener("click",()=>{
    mainbox.style.backgroundColor="black"
    mainbox.style.color="white"
})

darklight.addEventListener("click",()=>{
    mainbox.style.backgroundColor="white"
    mainbox.style.color="black"
})


input.addEventListener("focus", ()=>{
    input.style.width="30%"
})

input.addEventListener("blur", ()=>{
    input.style.width="10%"
})


input.addEventListener("input", (e) => {
    // console.log(input.value)
    // console.log(e.target.value)
    heading.innerText = e.target.value
})
