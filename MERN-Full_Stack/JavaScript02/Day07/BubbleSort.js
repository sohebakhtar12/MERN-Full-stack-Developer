// let arr = [5, 4, 3, 2, 1]

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr)

//                                           optimal case

// let arr = [5, 10, 3, 21, 1]
// for (let i = 0; i < arr.length - 1; i++) {
//     let isSorted = true
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//             isSorted = false
//         }
//     }
//     if (isSorted == true) {
//         break
//     }
// }
// console.log(arr)


// let arr = [
//     { name: "soheb", age: 25 },
//     { name: "sohan", age: 24 },
//     { name: "shivan", age: 26 },
//     { name: "soheb akhtar", age: 22 },
// ]

// for (let i = 0; i < arr.length - 1; i++) {
//     let isSorted = true
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j].age > arr[j + 1].age) {
//             let temp = arr[j];


//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//             isSorted = false
//         }
//     }

//     if (isSorted == true) {
//         break
//     }
// }
// console.log(arr)



// bubble sort with function 
let arr = [5, 6, 9, 8, 7, 1]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let isSort = true;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSort = false
            }

        }
        if (isSort == true) break
    }
    return arr;
}
console.log(bubbleSort(arr))