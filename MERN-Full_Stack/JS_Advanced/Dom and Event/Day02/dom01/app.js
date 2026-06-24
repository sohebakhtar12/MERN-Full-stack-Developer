const parent = document.getElementById("list")

let data=["apple","bat","cat","dog"]
for(let item of data){
    let li=document.createElement("li")
    li.innerText=item
    parent.append(li)
}