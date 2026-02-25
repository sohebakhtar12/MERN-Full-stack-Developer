//Shallow Copy














//---------------Deep Copy

let person1 = {
    name: "soheb",
    age: 23,
    language: ["hindi", "english"]
}
let str = JSON.stringify(person1)
let person2 = JSON.parse(str)

person2.language.push("tamil")

console.log(person1)
console.log(person2)


//