// let arr1 = [1, 4, 6, 7, 9, 10]
// let arr2 = [2, 5, 6, 8, 9]

// function merge(arr1, arr2) {
//     let i = 0
//     let j = 0
//     let ans = []

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] <= arr2[j]) {
//             ans.push(arr1[i])
//             i++
//         } else {
//             ans.push(arr2[j])
//             j++
//         }

//     }
// while (i < arr1.length) {
//     ans.push(arr1[i])
//     i++
// }
// while (j < arr2.length) {
//     ans.push(arr2[j])
//     j++
// }


//     return ans

// }
// console.log(merge(arr1, arr2))

//     MERGE SORT


function merge(arr1, arr2) {
    let i = 0
    let j = 0
    let ans = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            ans.push(arr1[i])
            i++
        } else {
            ans.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        ans.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        ans.push(arr2[j])
        j++
    }
    return ans
}

function mergeSort(arr) {
    if (arr.length == 1 || arr.length == 0) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}
console.log(mergeSort([9, 4, 2, 1, 0]))