

// const p1=new Promise((resolve,reject)=>{
//     let data=[4,8,6,4,76,8,78];


//     if(data.length>0){
//         resolve(data)
//     }
//     else{
//         reject("fail")
//     }
// })
// p1.then((data)=>{
//     console.log("completed")
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "Soheb",
            age: 24
        });
    }, 2000);
});

p2.then((data)=>{
    console.log(data)
})
