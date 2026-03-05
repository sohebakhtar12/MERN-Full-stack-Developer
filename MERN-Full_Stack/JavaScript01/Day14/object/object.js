// const obj = {
//     name: "soheb",
//     age: 23,
//     isPresent: true
// }



// //print

// console.log(obj)
// console.log(obj.name)
// console.log(obj["name"])
//     //change

// obj.age = 24
// console.log(obj.age)
//     //add

// obj.city = "Dehli";
// obj ["country"] = "india"
// console.log(obj)
// obj["pincode"] = 201303
// console.log(obj)

//     //for in loop
// for (let item in obj) {
//     console.log(item, obj[item])
// }
// //delete

// delete obj.pincode
// console.log(obj)

//     //methods
// const obj1 = {
//     name: "soheb",
//     age: 23,
//     isPresent: true,
//     sayHi: function() {
//         console.log("Hi" + obj.name)
//     },
//     sayHello: function() {
//         console.log("hello " + this.name)

//     }
// }
// obj1.sayHi()
//---------------------------------another day--------------------------------------
// const obj1 = {
//     name: "soheb",
//     age: 23,
//     isPresent: true,
//     sayHi: function() {
//         console.log("Hi " + obj1.name)
//     },
//     sayHello: function() {
//         console.log("hello " + this.name)

//     },
//     address: {
//         city: "dehli",
//         country: "India"
//     }
// }
// console.log(obj1.age);
// obj1.sayHi();
// console.log(obj1.address.city, obj1.address.country);
// console.log(typeof obj1)

// -- -- -- -- -- --hasOwnProperty-- -- -- -- -- -- -- -- -- -- -- --

const obj2 = {
    name: "soheb",
    age: 23,
    isPresent: true
}


if (obj2.hasOwnProperty("city")) {

} else {
    obj2.city = "katihar"
}
console.log(obj2)

// if (obj2.name) {

// } else {
//     obj2.name = "akhtar"
// }



//------------------------------------------------

// let arr = [0, 3, -9, 0, 96, 5, -9, 69, -62, 0, 5, -9]

// function count(arr) {
//     let zero = 0;
//     let positive = 0;
//     let negative = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 0) zero++;
//         else if (arr[i] > 0) positive++;
//         else if (arr[i] < 0) negative++;

//     }

//     return {
//         zero,
//         positive,
//         negative
//     }
// }
// let ans = count(arr)
// console.log(ans)

// //-------------------------------string-----------------------------------------------------

// let str = "B"

// if (str >= "A" && str <= "Z") {
//     console.log("UpperCASE")
// } else if (str >= "a" && str <= "z") {
//     console.log("Lowercase")
// }

// //------------------------------------------------------------------

// let str1 = "aBcDefghIJ"

// function stringCount(str1) {
//     let upper = 0;
//     let lower = 0;
//     let special = 0;
//     for (let item of str1) {
//         if (item >= "A" && item <= "Z") {
//             upper++;
//         } else if (item >= "a" && item <= "z") {
//             lower++;

//         } else {
//             special++;
//         }
//     }

//     return { upper, lower, special }
// }
// console.log(stringCount(str1))


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// let str = "helloWorld"
// let ans = {};
// for (let item of str) {
//     if (ans.hasOwnProperty(item)) {
//         ans[item] = ans[item] + 1

//     } else {
//         ans[item] = 1
//     }
// }
// console.log(ans)
//-------------------------object methods-----------------------------------


//-------------------preventExtensions------------------------------
// const obj1 = {
//     name: "soheb",
//     age: 24
// }
// Object.preventExtensions(obj1)

// obj1.city = "katihar"
// obj1["countey"] = "India"
// delete obj1.age
// obj1.name = "akhtar"
// console.log(obj1)
//-------------------freeze------------------------------

// const obj2 = {
//     name: "soheb",
//         age: 25
// }
// Object.freeze(obj2)
// obj2.city = "katihar"
// obj2["countey"] = "India"
// delete obj2.age
// obj2.name = "akhtar"
// console.log(obj2)
//---------------------------seal-----------------------------------------
// const obj3 = {
//     name: "soheb",
//     age: 25
// }
// Object.seal(obj3)
// obj3.city = "katihar"
// obj3["countey"] = "India"
// delete obj3.age
// obj3.name = "akhtar"
// console.log(obj3)