// //                some
// let arr = [-1, 1, 6, 3, 5, 4, 2]

// let ans = arr.some((item, index) => {
//     return item % 2 == 0
// })

// //                every
// let ans1 = arr.every((item) => {
//     return item % 2 == 0
// })
// console.log(ans)
// console.log(ans1)

//               quaction

// const users = [
//     { name: "a", age: 22 },
//     { name: "b", age: 17 },
//     { name: "c", age: 19 }
// ]


// let ans = users.some((item, index) => {
//     return item.age < 18
// })
// console.log(ans)


// const students = [
//     { name: "a", marks: [70, 80, 60] },
//     { name: "b", marks: [88, 92, 79] },
//     { name: "c", marks: [80, 68, 65] }
// ];
// let ans = students.some((item, index) => {
//     return item.marks.some((item) => {
//         return item > 90
//     })
// })
// console.log(ans)



// const data = [
//     { category: "a", items: [10, 20, 15] },
//     { category: "b", items: [5, 15, 20] },

// ];
// let ans = data.some((item, index) => {
//     return item.items.some((item) => {
//         return item > 25
//     })
// })
// console.log(ans)




// const data = [
//     { category: "a", marks: [50, 60, 70] },
//     { category: "b", marks: [45, 55, 65] },
//     { category: "c", marks: [30, 60, 80] }

// ];
// let ans = data.every((item, index) => {
//     return item.marks.every((item) => {
//         return item >= 40
//     })
// })
// console.log(ans)


// const data = [
//     { name: "a", age: 22 },
//     { name: "b", age: 17 },
//     { name: "c", age: 19 }
// ]


// let ans = data.filter((item, index) => {
//     return item.age > 18
// }).map(item => item.name)
// console.log(ans)