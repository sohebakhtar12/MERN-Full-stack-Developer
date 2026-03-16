   Map

   // let arr = [1, 2, 3, 4, 5]
   // const ans = arr.map((item, index) => {
   //     return item ** 2
   // })
   // console.log(ans)

   //     lower to UpperCase
   // let arr = ["hello", "word"]
   // const ans = arr.map((item, index) => {
   //     return item.toUpperCase();
   // })
   // console.log(ans)


   // let arr = [10, 20, 30]
   // const ans = arr.map((item, index) => {
   //     return item + 5
   // })
   // console.log(ans)



   // let arr = ["hello", "word"]
   // const ans = arr.map((item, index) => {
   //     return item.length;
   // })
   // console.log(ans)




   // let arr = [
   //     { name: "soheb", age: 23 },
   //     { name: "Ashu", age: 24 },
   //     { name: "Ravi", age: 25 },

   // ]
   // const ans = arr.map((item, index) => {
   //     return item.name
   // })
   // console.log(ans)



   // let arr = [
   //     { name: "soheb", age: 17 },
   //     { name: "Ashu", age: 24 },
   //     { name: "Ravi", age: 25 },

   // ]
   // const ans = arr.map((item, index) => {

   //     item.isAdult = (item.age >= 18)
   //     return item

   //     // return {
   //     //     ...item,
   //     //     isAdult: item.age >= 18
   //     // }
   // })
   // console.log(ans)


   // let arr = [
   //     { Fname: "soheb", Lname: "akhtar" },
   //     { Fname: "Ashu", Lname: "sarma" },
   //     { Fname: "Ravi", Lname: "kumar" },

   // ]
   // const ans = arr.map((item, index) => {
   //     return item.Fname + " " + item.Lname

   // })

   // console.log(ans)


   // let arr = [0, 10, 20]
   // const ans = arr.map((item, index) => {
   //     return (item * 9 / 5) + 32
   // })
   // console.log(ans)





   //                                                Filter

   // Even Number
   // let arr = [2, 5, 9, 6, 8, 7, 4, 5, 6]
   // const ans = arr.filter((item, index) => {
   //     return item % 2 == 0
   // })
   // console.log(ans)


   //greter then 10
   // let arr = [20, 5, 90, 6, 81, 17, 4, 5, 6]
   // const ans = arr.filter((item, index) => {
   //     return item > 10
   // })
   // console.log(ans)


   // let arr = [
   //     { name: "soheb", age: 17 },
   //     { name: "Ashu", age: 24 },
   //     { name: "Ravi", age: 25 },

   // ]
   // const ans = arr.filter((item, index) => {
   //     return item.age > 18
   // })
   // console.log(ans)



   // let obj = [
   //     { task: "study", done: true },
   //     { task: "DSA", done: false },
   //     { task: "Acciojob", done: true }

   // ]

   // const ans = obj.filter((item, index) => {
   //     return item.done
   // })
   // console.log(ans)


   let arr = ["a", "d", "s", "e"]
   const ans = arr.filter((item, index) => {
       return index % 2 == 0
   })
   console.log(ans)