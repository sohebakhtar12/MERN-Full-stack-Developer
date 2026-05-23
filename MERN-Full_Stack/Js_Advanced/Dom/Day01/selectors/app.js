const myBtn = document.getElementById("btn")
console.log(myBtn)

const myBtnUsingTagname=document.getElementsByTagName("button")
console.log(myBtnUsingTagname)


const myBtnUsingclass = document.getElementsByClassName("box")
console.log(myBtnUsingclass)


// Query Selector

const mybtnId=document.querySelector("#btn")
console.log(mybtnId)

const mybtnclass=document.querySelector(".box")
console.log(mybtnclass)

const mybtntagName=document.querySelector("button")
console.log(mybtntagName)

//Query Selector All

const mybtnIdAll=document.querySelectorAll("#btn")
console.log(mybtnIdAll)

const mybtnclassAll=document.querySelectorAll(".box")
console.log(mybtnclassAll)

const mybtntagNameAll=document.querySelectorAll("button")
console.log(mybtntagNameAll)