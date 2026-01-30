// var n = 2;
// for (let i = 1; i <= n; i++) {
//     console.log(i);
//}

// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }
//-------------------------------EVEN ELEMENT--------------------------------------------
// let n=10;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }
//-------------------------------COUNT ENEN AND ODD ELEMRNT--------------------------------------------
// let n=10;
// let evenCnt = 0;
// let oddcnt = 0;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         evenCnt++;
//     } else {
//         oddcnt++;
//     }
// }
// console.log(`Event Count ${evenCnt} , odd Count ${oddcnt}`);
//
//-------------------------------SUM OF ELEMENT --------------------------------------------
// let n=10;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum)
//
//-------------------------------FACTORIAL--------------------------------------------
// let n=5;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//     fact *= i;
// }
// console.log(fact)
//-------------------------------TABLES--------------------------------------------
// let n=2;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n*i} `);
// }
//-------------------------------REVERSE AND PERIDROME CHECK--------------------------------------------
// var n = 124;
// var rev = 0;
// var org = n;
// while (n != 0) {
//     let id = n % 10;
//     rev = rev * 10 + id
//     n = Math.floor(n / 10);
// }
// if (rev == org) {
//     console.log(true)
// } else {
//     console.log(false)
// }
//---------------------------------LARGEST NUMS OF DIGIT --------------------------------------------

// let largest = 0;
// var n = 258964;
// while (n != 0) {
//     let digit = n % 10;
//     if (digit > largest) {
//         largest = digit;
//     }
//     n = Math.floor(n / 10);
// }
// console.log(largest)

//-------------------------------------NEW TOPIC ARRAY--------------------------------------------

// let arr = [1, 65, 8, 6, 9, 6]
// let n = arr.length;

// for (let i = 0; i < n; i++) {
//     console.log(arr[i])
// }
//-------------------------------SUM OF ELEMENT--------------------------------------------

// let arr = [1, 2, 3]
// let n = arr.length;
// let sum = 0;

// for (let i = 0; i < n; i++) {
//     sum += arr[i]

// }
// console.log(sum)
//
//------------------------------ONLY Largest--------------------------------------------

// let arr = [1, 2, 3]
// let n = arr.length;
// let maxi = arr[0];
// for (let i = 1; i < n; i++) {

//     if (arr[i] > maxi) {
//         maxi = arr[i]

//     }

// }

//console.log(maxi) 
//------------------------------- Largest and Smallest--------------------------------------------

// let arr = [1, 2, 3]
// let n = arr.length;
// let maxi = arr[0];
// let mini = arr[0];
// for (let i = 1; i < n; i++) {

//     if (arr[i] > maxi) {
//         maxi = arr[i]

//     } else if (arr[i] < mini) {
//         mini = arr[i]
//     }

// }
// console.log(maxi, mini)
//-------------------------------2ND Largest--------------------------------------------
// let arr = [1, 2, 3, 4, 6]
// let n = arr.length;
// let maxi = arr[0];
// let smaxi = -1
// for (let i = 1; i < n; i++) {

//     if (arr[i] > maxi) {
//         smaxi = maxi;
//         maxi = arr[i]

//     } else if (arr[i] < maxi && arr[i] > smaxi) {
//         smaxi = arr[i]
//     }

// }
// console.log(smaxi)
//-------------------------------2ND Smallest--------------------------------------------

// let arr = [1, 2, 8, 4, 6];
// let n = arr.length;
// let smallest = Infinity;
// let Ssmallest = Infinity;
// for (let i = 0; i < n; i++) {
//     if (arr[i] < smallest) {
//         Ssmallest = smallest;
//         smallest = arr[i];
//     } else if (arr[i] > smallest && arr[i] < Ssmallest) {
//         Ssmallest = arr[i];
//     }
// }
// console.log(Ssmallest);
//-------------------------------LEFT ROTATE ONE PLACE--------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n = arr.length;
// let temp = arr[0];
// for (let i = 1; i < n; i++) {
//     arr[i - 1] = arr[i];
// }
// arr[n - 1] = temp;
// for (let i = 0; i < n; i++) {
//     console.log(arr[i]);
// }

//-------------------------------REVERSE ARRAY--------------------------------------------

let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let reverse = [];
for (let i = n - 1; i >= 0; i--) {
    reverse.push(arr[i]);
}
console.log(reverse);