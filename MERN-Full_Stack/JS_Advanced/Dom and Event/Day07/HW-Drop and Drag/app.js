const input = document.getElementById("ip")
const butten = document.getElementById("btn")
const pending = document.getElementById("pending")
const allContainers = document.getElementsByClassName("abc")


butten.addEventListener("click",()=>{
    const val = input.value 

    if(!val){
        alert("Please Enter Some Text")
        return
    }
    const card = document.createElement("article")
    card.setAttribute("draggable",true)
    card.setAttribute("class","my-card")
    card.setAttribute("id",Date.now())
  


    card.innerText=val
    pending.append(card)
    input.value=""
})


for(let item of allContainers){
    item.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("dataID", e.target.id)

    })

    item.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })

    item.addEventListener("drop",(e)=>{
        e.preventDefault()

        const id = e.dataTransfer.getData("dataID")
        const card = document.getElementById(id)

         

        if(e.target.id == "pending"){
            card.style.border = "4px solid red"
        }else if(e.target.id == "progress"){
            card.style.border = "4px solid yellow"
        }else if(e.target.id == "comleted"){
            card.style.border = "4px solid green"
        }
        // e.target.appendChild(card)
         e.target.tagName != "ARTICLE" && e.target.append(card)

    })
}



window.addEventListener("keydown", (e) => {
    if(e.key == "Enter")
    {
        butten.click()
    }
})