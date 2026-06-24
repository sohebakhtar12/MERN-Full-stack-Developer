const box1 = document.getElementById("first")
const box2 = document.getElementById("second")
const ele = document.getElementById("ele")

ele.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("dataID",e.target.id)
    
})

box1.addEventListener("dragover",(e)=>{
    e.preventDefault()
})

box1.addEventListener("drop",(e)=>{
    e.preventDefault()
    const myData=e.dataTransfer.getData("dataID")
    e.target.appendChild(document.getElementById(myData))

})


box2.addEventListener("dragover",(e)=>{
    e.preventDefault()
})

box2.addEventListener("drop",(e)=>{
    e.preventDefault()
    const myData=e.dataTransfer.getData("dataID")
    e.target.appendChild(document.getElementById(myData))

})