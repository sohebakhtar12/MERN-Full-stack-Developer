//    NORMAL WAY 
// function QuickSort(arr) {
//     if (arr.length == 0 || arr.length == 1) {
//         return arr;
//     }
//     let pivot = arr[arr.length - 1]
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] <= pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i])
//         }
//     }
//     let sortedleft = QuickSort(left);
//     let sortedright = QuickSort(right);
//     return [...sortedleft, pivot, ...sortedright]

// }
// console.log(QuickSort([56, 25, 89, 36, 1, 100]))

//   OPTIMAL SOLUTION

// function QuickSort(arr) {
//     if (arr.length == 0 || arr.length == 1) {
//         return arr;
//     }
//     let pivotIdx = Math.floor(Math.random() * arr.length)
//     let pivot = arr[pivotIdx]
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length; i++) {

//         if (i == pivotIdx) {
//             continue

//         }
//         if (arr[i] <= pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i])
//         }
//     }
//     let sortedleft = QuickSort(left);
//     let sortedright = QuickSort(right);
//     return [...sortedleft, pivot, ...sortedright]

// }
// console.log(QuickSort([56, 25, 89, 36, 1, 100]))


// function QuickSort(arr) {
//     if (arr.length == 1 || arr.length == 0) {
//         return arr
//     }
//     let pivotIndx = Math.floor(Math.random() * arr.length)
//     let pivotele = arr[pivotIndx]
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length; i++) {

//         if (i == pivotIndx) continue;
//         if (arr[i] < pivotele) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return [...QuickSort(left), pivotele, ...QuickSort(right)]
// }


// console.log(QuickSort([2, 6, 9, 5, 0, 65, 1]))




function QuickSort(arr) {
    if (arr.length == 1 || arr.length == 0) {
        return arr
    }
    let left = [];
    let right = [];
    let pivotIdx = Math.floor(Math.random() * arr.length)
    let pivotele = arr[pivotIdx]

    for (let i = 0; i < arr.length; i++) {
        if (i == pivotIdx) continue
        if (arr[i] <= pivotele) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...QuickSort(left), pivotele, ...QuickSort(right)]

}
console.log(QuickSort([23, 56, 8, 69, 0]))