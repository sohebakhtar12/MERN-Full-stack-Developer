// let n = Number(prompt("Enter a number"))

// let n = 5
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n}x${i} = ${n*i}`)
// }


// let n2 = 5;
// let str = "";
// for (let i = 0; i < n2; i++) {
//     str += "* ";
// }
// console.log(str)


// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i}x${j} = ${j*i}`)
//     }

// }


// let start = Number(prompt("Enter start number"))
// let end = Number(prompt("Enter end number"))
// for (let i = start; i <= end; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i}x${j} = ${j*i}`)
//     }
// }


// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     let subArr = [];
//     for (let j = i; j < arr.length; j++) {
//         subArr.push(arr[j])
//         console.log(subArr)
//     }
// }


// let str = "soheb"
// for (let i = 0; i <arr.length; i++) {
//     let subStr = "";
//     for (let j = i; j <= arr.length; j++) {
//         subStr += str[j]
//         console.log(subStr)
//     }
// }


//--------------------------------petten print-------------------------------------------------------


// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n; j++) {
//         str += "* ";

//     }
//     console.log(str)
// }




// let row = 5;
// let col = 7
// for (let i = 1; i <= row; i++) {
//     let str = "";
//     for (let j = 1; j <= col; j++) {
//         str += "* ";

//     }
//     console.log(str)
// }


// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str += "* ";

//     }
//     console.log(str)
// }



// let num = 5;
// for (let i = 1; i <= num; i++) {
//     let str = "";
//     for (let j = 1; j <= num - i + 1; j++) { //for (let j = i; j <= num ; j++) 
//         str += "* ";
//     }
//     console.log(str)
// }


// let num = 5;
// for (let i = 1; i <= num; i++) {
//     let str = "";
//     for (let j = 1; j <= num; j++) {

//         if (i == 1 || i == num || j == 1 || j == num) {
//             str += "* ";
//         } else {

//             str += "  ";
//         }


//     }
//     console.log(str)
// }



// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         if (i == n || j == 1 || j == i) {
//             str += "* ";
//         } else {
//             str += "  "
//         }

//     }
//     console.log(str)
// }



// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n - i; j++) {
//         str += "  ";

//     }
//     for (let k = 1; k <= i; k++) {
//         str += "* "
//     }
//     console.log(str)
// }




let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
        str += "  ";
    }
    for (let k = 1; k <= i; k++) {
        if (k == i || i == n || k == 1) {
            str += "* "
        } else {
            str += "  "
        }
    }
    console.log(str)
}