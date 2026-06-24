const main = document.getElementById("box")
const card = document.getElementsByClassName("card")
const add = document.getElementById("boxs")

// for(let item of card){
//     item.addEventListener("click", ()=>{
//     let curr= item.innerText

//     add.innerText = curr + ", " + add.innerText


//     })
// }

main.addEventListener("click",(e)=>{

  if(e.target.tagName=="MAIN"){
    return
  }
  let curr= e.target.innerText 
  add.innerText = curr + ", " +add.innerText

})