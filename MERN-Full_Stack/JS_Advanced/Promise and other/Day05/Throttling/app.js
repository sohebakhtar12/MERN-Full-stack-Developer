const button = document.getElementById("btn")
const input = document.getElementById("ip")

function throttle(fn,delay){
    let last=0
    return function(e){
        
        let now=Date.now()
        if(now-last <= delay){
            return
        }
        last = now
        fn(e)
    }
}

let thorttledHandler=throttle(()=>console.log("ok"),2000)

let thorttledIpHandler=throttle((e)=>console.log(`API Called for query : ${e.target.value}`),2000)

button.addEventListener("click",thorttledHandler)
input.addEventListener("input",thorttledIpHandler)