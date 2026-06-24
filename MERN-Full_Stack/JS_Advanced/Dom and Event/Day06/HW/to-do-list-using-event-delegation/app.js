const btn = document.getElementById("btn")
const input = document.getElementById("ip")
const list = document.getElementById("list")



btn.addEventListener("click", () => {

    const text = input.value
    if(!text)
    {
        alert("Please enter some text")
        return
    }

    const listItem = document.createElement("li")

             // styte
    listItem.style.cursor = "pointer"
    listItem.style.backgroundColor = "yellow"
    listItem.innerText = text
    listItem.style.margin = "20px"
    listItem.style.height = "50px"
    listItem.style.width = "200px"
    listItem.style.borderRadius = "10px"

    list.append(listItem)
    input.value = ""
})

list.addEventListener("click", (e) => {  //EVENT DELEGATION
    // console.log(e)
    if(e.target.tagName == "LI")
    {
        e.target.remove()
    }
})