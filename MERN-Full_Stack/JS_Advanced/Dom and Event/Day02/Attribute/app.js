const box=document.getElementById("box")

let p1 = document.createElement("p")
p1.innerHTML="hello from p1"

let p2 = document.createElement("p")
p2.innerHTML="hello from p2"

let p3 = document.createElement("p")
p3.innerHTML="hello from p3"

let p4= document.createElement("p")
p4.innerHTML="hello from p4"



box.append(p1,p2,p3,p4)
box.append("heelo soheb")

// box.remove()        //delete box



//get and sat attribute
const list=document.getElementById("list")


const arr=["apple","bannana","orange","kuchbhi"]

let count=1
for(let item of arr){
    let li=document.createElement("li")
    li.innerHTML=item
     // sat attribute
    li.setAttribute("class","items")   
    li.setAttribute("id",count)
    count ++

    list.append(li)
}

