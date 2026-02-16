const obj = {
    name: "soheb",
    age: 23,
    isPresent: true
}

//print
console.log(obj)
console.log(obj.name)
console.log(obj["name"])
    //change
obj.age = 24
console.log(obj.age)
    //add
obj.city = "Dehli";
console.log(obj)
obj["pincode"] = 201303
console.log(obj)
    //for in loop
for (let item in obj) {
    console.log(item, obj[item])
}
//delete
delete obj.pincode
console.log(obj)
    //methods
const obj1 = {
    name: "soheb",
    age: 23,
    isPresent: true,
    sayHi: function() {
        console.log("Hi" + obj.name)
    },
    sayHello: function() {
        console.log("hello " + this.name)

    }
}
obj1.sayHi()