// function sayHI() {
//     console.log("hello Soheb");
// }
// sayHI() //run,invoke,execute
// sayHI() //run,invoke,execute
// sayHI() //run,invoke,execute
// sayHI() //run,invoke,execute

// function sayHI(name) {
//     console.log(`hello ${name}`)

// }
// sayHI("soheb") //run,invoke,execute 
// sayHI("Ashu") //run,invoke,execute
// sayHI("ravi") //run,invoke,ex ecute

// function sum(a, b) {
//     console.log(a + b)

// }
// sum(12, 63)


// function sum() {
//     var x = Number(prompt("enter a number a"));
//     var y = Number(prompt("enter a number b"));
//     console.log(x + y);

// }
// sum();

// function sum() {
//     var x = Number(prompt("enter a number a"));
//     var y = Number(prompt("enter a number b"));
//     return x + y;

// }

// console.log(sum());

//function expression

// const myFn = function(age, name = "User") {
//         console.log("hello for function expression", name)
//         return "xyz"

//     }
// myFn(23, "soheb")
// console.log(myFn())
// let retVal = myFn;
// console.log(myFn())

//Arrow Function

// const sayHi = (name = "user") => {
//     console.log("hii", name)
// }
// sayHi("soheb")


// let arr = ["cat", , "dog", "olw"]

// let n = arr.length
// for (let i = 0; i < 4; i++) {
//     console.log(arr[i])
// }

// let n = 8;
// let arr = []
// let i = 1
// for (let i = 1; i <= 10; i++) {
//     let x = n * i
//     arr.push(x)
// }

let arr = [8, 6, 6, 52, 2, 5]
for (let i = arr.length - 1; i >= 0; i--) {

    arr.pop()
}
console.log(arr)