// Normal Customers = Macrotasks
// VIP Customers    = Microtasks

// When the main work is finished:

// 1. Serve all VIP customers (Microtasks)
// 2. Then serve normal customers (Macrotasks)
//--------------------------------------------------------
// 1.   Synchronous Code
//            ↓
// 2.    Microtask Queue
//      (Promise.then, catch, finally, queueMicrotask, MutationObserver)
//            ↓
// 3.    Macrotask Queue
//      (setTimeout, setInterval, DOM Events, setImmediate)
//------------------------------------------------------------------


// JavaScript first executes all synchronous code. After the call stack becomes empty,
// it executes all Microtasks (such as Promise callbacks). Only after the Microtask Queue is empty does
// it execute Macrotasks (such as setTimeout and setInterval callbacks).



console.log("Start") 
setTimeout(() => { 
    console.log("SetTimeout") 
}, 0) 

new Promise((res, rej) => { 
    res("Promise") 
}) 

.then((data) => { 
    console.log(data) 
}) 

console.log("End") 

