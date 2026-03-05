// let arr = [1, 3, 3, 4, 4]
// let arr2 = arr.map((item) => item * 3).filter(item => item % 2 == 0)

// console.log(arr2)

// let sum = arr2.reduce((acc, cur) => {
//     return acc = acc + cur
// })
// console.log(sum)

// let product = arr.reduce((acc, cur) => {
//     return acc = acc * cur
// })
// console.log(product)

//find even  then multi 3 then product 
// let arr3 = arr.filter(item => item % 2 == 0).map((item) => item * 3).reduce((acc, cur) => {
//     return acc = acc * cur
// })
// console.log(arr3)

// let str = "soheb";
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];

// }
// console.log(rev)
// if (str === rev) {
//     console.log('prolidrom')
// } else {
//     console.log('not prolidrom')
// }

let str = "sohebooaao";
let count = 0;

for (let i = str.length - 1; i >= 0; i--) {
    if ("a" == str[i] || "e" == str[i] || "u" == str[i] || "o" == str[i] || "i" == str[i]) {
        count++;
    }


}
console.log(count)