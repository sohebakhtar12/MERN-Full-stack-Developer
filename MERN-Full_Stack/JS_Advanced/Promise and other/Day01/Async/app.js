const body = document.getElementById("body")

   // srtTimeout
setTimeout(() => {
    console.log("ONE")
}, 3000)

setTimeout(() => {
    console.log("TWO")
}, 2000)

setTimeout(() => {
    console.log("THREE")
}, 1000)

     // srtTimeout
const add = document.createElement("h1")  
add.innerText = "Kharid Lo!!"

setTimeout(() => {
    body.append(add)
}, 4000)



              //setInterval
const ad = document.createElement("article")
const adText = document.createElement("h1")
const adCloseBtn = document.createElement("button")
adText.innerText = "This is your ad"
adCloseBtn.innerText = "Close Ad"


ad.append(adText, adCloseBtn)


adCloseBtn.addEventListener("click", () => {
    ad.remove()
})


setInterval(() => {
    body.append(ad)
}, 3000)



const intervalId = setInterval(() => {
    console.log("Hello")
}, 0)

clearInterval(intervalId)