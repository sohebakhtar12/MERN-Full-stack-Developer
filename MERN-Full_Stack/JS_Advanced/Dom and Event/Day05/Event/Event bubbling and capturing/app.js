const outer = document.getElementById("outer")
const middle = document.getElementById("middle")
const inner = document.getElementById("inner")


outer.addEventListener("click",()=>{
    console.log("i am outer")
})

middle.addEventListener("click",(e)=>{
    console.log("i am middle")
    e.stopPropagation()   // stop bubbling
})


inner.addEventListener("click",()=>{
    console.log("i am inner")
})

