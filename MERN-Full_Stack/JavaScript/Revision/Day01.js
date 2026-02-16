// var n = 10;
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

// let arr = [1, 2, 3, 4, 5, 6];
// let n = arr.length;
// let temp = arr[0];
// for (let i = 1; i < n; i++) {
//     arr[i - 1] = arr[i];
// }
// arr[n - 1] = temp;
// console.log(arr);

//-------------------------------REVERSE ARRAY--------------------------------------------

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// let reverse = [];
// for (let i = n - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
// }
// console.log(reverse);

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// let reverse = [];
// for (let i = n - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
// }
// console.log(reverse);

//-------------------------------PRIME NUMBERS PRINT 1 to n--------------------------------------------


// function isprime(n) {      //check prime number 
//     if (n < 2) return false;

//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return false
//     }

//     return true;
// }
// //print prime numbers
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     if (isprime(i)) {
//         console.log(i);
//     }
// }

//-------------------------------PRIME NUMBERS PRINT 1 to n without function --------------------------------------------

// let n = 100
// for (let i = 1; i <= n; i++) {
//     let isprime = true;
//     if (i < 2) isprime = false;
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             isprime = false;
//             break;
//         }
//     }
//     if (isprime) {
//         console.log(i)
//     }
// }
//-------------------------------CHECK PRIME NUMBERS AND PRINT A MESSAGE --------------------------------------------

// function checkPrime(num) {

//     let isprime = true;
//     if (num < 2) isprime = false;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i == 0) {
//             isprime = false;
//             break;

//         }
//     }
//     if (isprime) {
//         console.log(`${num} is prime number `)
//     } else {
//         console.log(`${num} is not a prime number `)

//     }
// }
// checkPrime(3);
//-------------------------------CHECK PRIME NUMBERS AND PRINT TRUE FALSE  --------------------------------------------
// function checkPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i == 0) {
//             return false;
//             break;
//         }
//     }
//     return true;
// }
// console.log(checkPrime(10))

//-------------------------------sum of digit club--------------------------------------------

let num = 123;
let sum = 0;
while (0 < num) {
    lastDigit = num % 10;
    sum += lastDigit ** 3;
    num = Math.floor(num / 10);
}
console.log(sum)

//-------------------------------zero +ve -ve counting--------------------------------------------


// let arr = [0, 3, -9, 0, 96, 5, -9, 69, -62, 0, 5, -9]

// function count(arr) {
//     let zero = 0;
//     let positive = 0;
//     let negative = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 0) zero++;
//         else if (arr[i] > 0) positive++;
//         else if (arr[i] < 0) negative++;

//     }
//    //  how to return object from
//     return { zero ,positive ,negative}
// }
// let ans = count(arr)
// console.log(ans)

// //-------------------------------string are uppercate or lower case-----------------------------------------------------

// let str = "B"

// if (str >= "A" && str <= "Z") {
//     console.log("UpperCASE")
// } else if (str >= "a" && str <= "z") {
//     console.log("Lowercase")
// }

// //------------------------uppercase and lower case alphabit counting------------------------------------------

// let str1 = "aBcDefghIJ"

// function stringCount(str1) {
//     let upper = 0;
//     let lower = 0;
//     let special = 0;
//     for (let item of str1) {
//         if (item >= "A" && item <= "Z") {
//             upper++;
//         } else if (item >= "a" && item <= "z") {
//             lower++;

//         } else {
//             special++;
//         }
//     }
//    //  how to return object from
//     return { upper, lower, special }
// }
// console.log(stringCount(str1))


// -- -- -- -- -- -- -- -- --charter counting -- -- -- -- -- -- -- -- -- -- -- -- --
// let str = "helloWorld"
// let ans = {};
// for (let item of str) {
//     if (ans.hasOwnProperty(item)) {
//         ans[item] = ans[item] + 1

//     } else {
//         ans[item] = 1
//     }
// }
// console.log(ans)