const form = document.getElementById("form")

form.addEventListener("submit",(e)=>{
    console.log(e)
   e.preventDefault()

})

window.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
})