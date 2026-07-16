// console.log(Promise.prototype)


const p1 = new Promise((resolve, reject)=>{
    let dataPresent=true;

    if(dataPresent){
        resolve("completed")
    }else{
         reject("fail")
    }
})

console.log(p1)

//---------------------------------------------------------------------

//used .then for resolve and .catch for reject and 
//and .finally always run 

const p2 = new Promise((resolve, reject)=>{
    let arr=[7,5,95,6,5,6,5]

    if(arr.length>0){
        resolve("completed")
    }else{
         reject("fail")
    }
})

p1.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
//------------------------------------------------------------------------------

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name : "soheb",age : 24})
    },4000)
})

p3.then((data)=>{
    console.log(data)

})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log(".finally always run ")
})  