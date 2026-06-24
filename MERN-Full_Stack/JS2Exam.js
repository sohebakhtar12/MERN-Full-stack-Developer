// function VowelCount(str, index = 0) {

//     if (index === str.length) {
//         return 0;
//     }
//     let vowel = "aeiouAEIOU";

//     // if (vowel.includes(str[index])) {
//     //     return 1
//     // } else {
//     //     return 0
//     // }
//     let isVowel = vowel.includes(str[index]) ? 1 : 0;


//     return isVowel + VowelCount(str, index + 1);
// }


// console.log(VowelCount("aaaa"));

// let n = 5
// let star = 1
// let space = n - 1

// for (let i = 1; i <= n; i++) {
//     let str = ""
//     for (let j = 1; j <= space; j++) {
//         str += "  "

//     }

//     for (let k = 1; k <= star; k++) {
//         str += "* "
//     }
//     console.log(str)
//     star += 2
//     space--;
// }

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return -1;
// }


// let arr = [5, 6, 8, 9, 10];
// console.log(binarySearch(arr, 6));



function printSubarr(arr) {


    for (let i = 0; i < arr.length; i++) {
        let sub = "";

        for (let j = i; j < arr.length; j++) {
            sub += arr[j] + " ";
            console.log(sub);
        }
    }
}

printSubarr([1, 2, 3]);