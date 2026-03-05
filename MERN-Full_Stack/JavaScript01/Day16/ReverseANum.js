let num = 1234567;
let rev = 0;
while (num > 0) {
    let lastDig = num % 10;
    rev = rev * 10 + lastDig;
    num = Math.floor(num / 10);
}
console.log(rev)

let num1 = 1234567
let str = String(num1);
console.log(str.split("").reverse().join(""))