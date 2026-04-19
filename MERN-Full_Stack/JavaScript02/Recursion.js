function num(n) {
    if (n < 1) {
        return
    }
    console.log(n)
    num(n - 1)
}
num(5)

function nums(i, n) {
    if (i > n) {
        return
    }
    console.log(i)
    nums(i + 1, n)
}
nums(1, 5)




// function naturenum(n, sum) {
//     if (n < 1) {
//         console.log(sum)
//         return
//     }

//     naturenum(n - 1, sum + n)
// }
// naturenum(3, 0)

function sumofnum(n) {
    if (n == 0) {
        return 0
    }
    return n + sumofnum(n - 1)
}
console.log(sumofnum(3))



function fact(n) {
    if (n == 1) {
        return 1
    }
    return n * fact(n - 1)
}
console.log(fact(5))

//reverse

function reverseArr(arr, left, right) {
    if (left >= right) {
        return
    }
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    reverseArr(arr, left + 1, right - 1)
}
let arr = [1, 2, 3, 4, 5, 6, 7]
reverseArr(arr, 0, arr.length - 1)
console.log(arr)

//checkif a string is Palidroms

function Palidrom(str, left, right) {
    if (left >= right) {
        return true
    }
    if (str[left] !== str[right]) {
        return false;
    }
    return Palidrom(str, left + 1, right - 1)
}
str = "madam"

console.log(Palidrom(str, 0, str.length - 1))


//sum of array

function arrSum(arr, ind) {
    if (arr.length == ind) {
        return 0
    }
    return arr[ind] + arrSum(arr, ind + 1)
}
console.log(arrSum([2, 2, 4, 2], 0))


//sum of nature number

function sumOfnatureNum(n) {
    if (n == 1) {
        return 1
    }
    return n + sumOfnatureNum(n - 1)
}

console.log(sumOfnatureNum(3))


function xPowerN(x, n) {
    if (n == 0) {
        return 1
    }
    return x * xPowerN(x, n - 1)
}

console.log(xPowerN(2, 2))





function fib(n) {
    // write code here
    if (n == 1) {
        return 0;
    }
    if (n == 2) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}