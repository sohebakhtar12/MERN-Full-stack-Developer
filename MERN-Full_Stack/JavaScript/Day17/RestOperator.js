//------------------------------------Rest Operator-----------------------------------------------------------------
function sum(...nums) {
    let sum = 0;
    for (let item of nums) {
        sum += item
    }
    console.log(sum)
}

sum(10, 10, 10, 10)


function tallPosition(first, second, third, ...extras) {

    console.log(`First is ${first}`)
    console.log(`second is ${second}`)
    console.log(`third is ${third}`)
    console.log(`Consolation ${extras}`)

}
tallPosition("Amit", "bhanu", "Ashish", "subhash", "soheb", "akhtar")

//sortcricute
let n = 22;
let arr = ["Event", "odd"]

console.log(arr[n % 2])

// Destructuring an object

let obj = {
    name: "soheb",
    age: 23,
    city: "Noida"
}

const { name: naam, age: umar, city: jagah } = obj; //Destructuring
console.log(naam, umar, jagah)

//------------------------------using rest operator an object------------------------------------

const { name, ...something } = obj;
console.log(name);
console.log(something)

//---------------------------------------Spread Operator---------------------------------------------------
let arr1 = [8, 5, 6, 2, 5, 2, 6, 2, 8]
let arr2 = [4, 2, 5, 5, 6, 2, 1]

console.log(...arr1)

let marge = [...arr1, ...arr2]
console.log(marge)

let marge1 = [1, 2, 3, ...arr1, ...arr2, 9, 8, 7]
console.log(marge1)

//---------------------------------------Spread Operator an Object---------------------------------------------------
let ob = {
    name: "soheb",
    age: 23,
    city: "Noida"
}
let ob1 = {
    address: "noida",
    pincode: 2016303,
    state: "bihar"
}
let ob3 = {
    ...ob,
    ...ob1
}
console.log(ob3)