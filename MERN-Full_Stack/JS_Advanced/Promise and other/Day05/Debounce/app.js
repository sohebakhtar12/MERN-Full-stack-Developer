const input = document.getElementById("ip")


// let id;
// function inputHandle(e){
//     // console.log("API Called")

//     clearTimeout(id)

//     id=setTimeout(()=>{
//         console.log(`API Called for query : ${e.target.value}`)
//     },2000)
// }

// input.addEventListener("input",inputHandle)


function debounce(fn,delay){
    let id;
    return function(e){
        clearTimeout(id)
        if(e.target.value=="") return
        id =setTimeout(()=>{
            fn(e)
        },delay)
    }
}

const debouncedHandler=debounce((e)=>console.log(`API called for query : ${e.target.value}`),1000)

input.addEventListener("input",debouncedHandler)


