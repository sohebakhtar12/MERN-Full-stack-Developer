// let n = 5;

// for (let row = 1; row <= n; row++) {
//     let str = "";
//     for (let col = 1; col <= n; col++) {

//         if (row == 1 || row == n || col == 1 || col == n || col == row || row + col == n + 1) {
//             str += "* "
//         } else {
//             str += "  "
//         }
//     }
//     console.log(str)
// }



// let n = 5;
// let stars = 1;
// let space = n - 1
// for (let row = 1; row <= n; row++) {
//     let str = "";

//     for (let col = 1; col <= space; col++) {

//         str += "  "
//     }
//     for (let col = 1; col <= stars; col++) {

//         str += "* "
//     }
//     console.log(str)
//     stars += 2;
//     space--;
// }




// let n = 5;
// let stars = 1;
// let space = n - 1
// for (let row = 1; row <= n; row++) {
//     let str = "";

//     for (let col = 1; col <= space; col++) {

//         str += "  "
//     }
//     for (let col = 1; col <= stars; col++) {


//         if (row == n || col == 1 || col == stars) {
//             str += "* "
//         } else {
//             str += "  "
//         }
//     }
//     console.log(str)
//     stars += 2;
//     space--;
// }


// let n = 5;
// let stars = 2 * n - 1;
// let space = 0;
// for (let row = 1; row <= n; row++) {
//     let str = "";

//     for (let col = 1; col <= space; col++) {

//         str += "  "
//     }
//     for (let col = 1; col <= stars; col++) {

//         if (row == 1 || col == 1 || col == stars) {
//             str += "* "
//         } else {
//             str += "  "
//         }
//     }
//     console.log(str)
//     stars -= 2;
//     space++
// }


// let n = 7;
// let stars = n;
// let space = 0;

// for (let i = 1; i <= n; i++) {
//     let str = "";

//     for (let j = 1; j <= space; j++) {
//         str += "  "

//     }
//     for (let k = 1; k <= stars; k++) {
//         str += "* "

//     }


//     if (i < n / 2) {
//         stars -= 2;
//         space++

//     } else {
//         stars += 2;
//         space--

//     }
//     console.log(str)

// }





// let n = 7;
// let stars = n;
// let space = 0;

// for (let i = 1; i <= n; i++) {
//     let str = "";

//     for (let j = 1; j <= space; j++) {
//         str += "  "

//     }
//     for (let k = 1; k <= stars; k++) {
//         // str += "* "
//         if (i == n || k == 1 || k == stars || i == 1) {
//             str += "* "
//         } else {
//             str += "  "
//         }
//     }


//     if (i < n / 2) {
//         stars -= 2;
//         space++

//     } else {
//         stars += 2;
//         space--

//     }
//     console.log(str)

// }


let n = 3;
let stars = 1;
let space = n
for (let row = 1; row <= 2 * n + 1; row++) {
    let str = "";

    for (let col = 1; col <= space; col++) {

        str += "  "
    }
    for (let col = 1; col <= stars; col++) {

        str += "* "
    }
    if (row <= n) {
        stars += 2;
        space--;

    } else {
        stars -= 2;
        space++

    }
    console.log(str)
}