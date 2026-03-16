//                    Higher Order functions   HOF

// function hof() {
//     const fn = () => {
//         console.log("Hello from returned function ")

//         const fn1 = () => {
//             console.log("Hello from returned fn1 ")
//         }
//         return fn1
//     }
//     return fn
// }


// const returnedFn = hof()
// const inner = returnedFn()
// inner()


// function hof2(cb) {
//     cb()
// }
// hof2(() => {
//     console.log("hello ")
// })


// function hof2(cb) {
//     cb()

//     return () => {
//         console.log("hii i m pagal")
//     }
// }
// const hmaapp = hof2(() => {
//     console.log("hello ")
// })

// hmaapp()


//