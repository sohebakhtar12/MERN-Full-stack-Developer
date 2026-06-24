const titleBar=document.getElementById("title")
const addBtn=document.getElementById("Btn")     
const descBar=document.getElementById("desc")  
const cardContain=document.getElementById("right")


addBtn.addEventListener("click", ()=> {

    if(!titleBar.value || !descBar.value ){
        alert("Please Enter Both The Fields")
        return
    }


    const card=document.createElement("article")

    card.addEventListener("click",()=> {
        card.remove()
    })
    
    const titleContain=document.createElement("h2")
    titleContain.innerText = titleBar.value

    const descContain=document.createElement("p")
    descContain.innerText = descBar.value
    
    card.append(titleContain,descContain)

    card.style.backgroundColor = "white"
    card.style.width = "90%"
    card.style.padding = "10px 5px"
    card.style.borderRadius = "10px"
    card.style.marginTop="10px"
    
    cardContain.append(card)

    titleBar.value= ""
    descBar.value=""

    
})

