let arr=[]
let obj={k:1}
let n=13
let str="soheb"

let arr1 = new  Array()
let obj1 = new Object()
let n1 = new Number(85)
let str1 = new String("heelo")


console.log(arr,arr1)
console.log(obj,obj1)
console.log(n,n1)
console.log(str,str1)


let arr2=[1,2,3]
console.log(arr.__proto__)
console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__.__proto__)  //op is null


let name = "soheb"
console.log(name.__proto__)
console.log(name.__proto__.__proto__)
console.log(name.__proto__.__proto__.__proto__)


let s=new Set()
let m=new Map()

console.log(s)
console.log(m)