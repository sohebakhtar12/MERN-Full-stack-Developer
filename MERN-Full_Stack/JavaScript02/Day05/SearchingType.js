//linear Search

// let arr = [3, 1, -10, 66, 30, 20]
// let target = 66;
// let idx = -1
// for (let i = 0; i < arr.length; i++) {
//     if (target == arr[i]) {
//         idx = i
//         break
//     }

// }
// console.log(idx)


//Binary Search


let arr = [1, 3, 5, 9]
let target = 9;
let idx = -1

let start = 0;
let end = arr.length - 1;
while (start <= end) {

    let mid = Math.floor((start + end) / 2)
    if (arr[mid] == target) {
        idx = mid
        break
    } else if (arr[mid] < target) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }

}
console.log(idx)



let arr = [1, 3, 5, 9]
let target = 9;
let idx = -1

let start = 0;
let end = arr.length - 1;
while (start <= end) {

    let mid = Math.floor((start + end) / 2)
    if (arr[mid] == target) {
        idx = mid
        break
    } else if (arr[mid] < target) {
        start = mid + 1;
    } else {

        end = mid - 1;
    }

}
console.log(idx)