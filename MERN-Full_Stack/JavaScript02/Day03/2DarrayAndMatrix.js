//  let arr = [
//      [1],
//      [1, 2],
//      [1, 2, 3],
//      [1, 2, 3, 4]
//  ]


//  //  for (let item of arr) {
//  //      for (let num of item) {
//  //          console.log(num)
//  //      }
//  //  }
.


//  for (let i = 0; i < arr.length; i++) {
//      for (let j = 0; j < arr[i].length; j++) {
//          console.log(arr[i][j])
//      }
//  }



//how to user input of a arr 
// let size = Number(prompt("enter array size"))
// let arr1 = [];

// for (let i = 0; i < size; i++) {
//     arr1.push(Number(prompt(`enter ${i+1} element`)))
// }
// console.log(arr1)

//how to user input of a 2D arr

// let row = Number(prompt("enter number of rows "))
// let arr = []
// for (let i = 0; i < row; i++) {
//     let col = Number(prompt("enter number of col"))
//     let inner = [];
//     for (let j = 0; j < col; j++) {

//         inner.push(Number(prompt(`Enter row : ${i},col : ${j} element`)))
//     }
//     arr.push(inner)

// }

// console.log(arr)

//find miximum and minimum element for 2D array

// let arr = [
//     [10, 55, 14, 58],
//     [16, 29],
//     [199, 268, 32],
//     [105, 212, 35, 4]
// ]

// let min = Infinity
// let max = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {

//         if (max < arr[i][j]) {
//             max = arr[i][j]
//         }

//         if (min > arr[i][j]) {
//             min = arr[i][j]
//         }
//     }

// }
// console.log("maximum element ", max)
// console.log("manimum element ", min)


//reverse 2 D array
// let arr = [
//     [10, 55, 14, 58],
//     [16, 29],
//     [199, 268, 32],
//     [105, 212, 35, 4]
// ]


// for (let i = 0; i < arr.length; i++) {
//     let s = 0;
//     let e = arr[i].length - 1
//     while (s < e) {
//         let temp = arr[i][s]
//         arr[i][s] = arr[i][e]
//         arr[i][e] = temp
//         s++;
//         e--;

//     }

// }

// console.log(arr)

//reverse 2 D array using for of loop
// let arr = [
//     [10, 55, 14, 58],
//     [16, 29],
//     [199, 268, 32],
//     [105, 212, 35, 4]
// ]

// for (let row of arr) {

//     let s = 0;
//     let e = row.length - 1;

//     while (s < e) {
//         let temp = row[s];
//         row[s] = row[e];
//         row[e] = temp;

//         s++;
//         e--;
//     }
// }

// console.log(arr);


// let arr = [
//     [10, 55, 14, 58],
//     [16, 29],
//     [199, 268, 32],
//     [105, 212, 35, 4]
// ]

// let str = ""

// let maxCol = 0

// for (let row of arr) {
//     if (row.length > maxCol) {
//         maxCol = row.length
//     }
// }

// for (let j = 0; j < maxCol; j++) {
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i][j] !== undefined) {
//             str += arr[i][j] + " "
//         }

//     }
// }

// console.log(str)



let arr = [
    [6, 6, 7],
    [5, 5, 7, 6],
    [5, 1, 23, 4]
]

let maxCol = -Infinity

for (let row of arr) {
    if (row.length > maxCol) {
        maxCol = row.length
    }
}

for (let i = 0; i < maxCol; i++) {
    for (let j = 0; j < arr.length; j++) {

        if (arr[j][i] == undefined) {
            continue
        }
        console.log(arr[j][i])
    }
}