var n = 2;
// for (let i = 1; i <= n; i++) {
//     console.log(i);
//}

// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }

// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }


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


// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum) 
// 


// let fact = 1;
// for (let i = 1; i <= n; i++) {
//     fact *= i;
// }
// console.log(fact)


// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n*i} `);
// }

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

let largest = 0;
var n = 258964;
while (n != 0) {
    let digit = n % 10;
    if (digit > largest) {
        largest = digit;





    }
    n = Math.floor(n / 10);
}
console.log(largest)