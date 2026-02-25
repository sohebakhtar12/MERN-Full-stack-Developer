let arr = [1, 2, 3, 4, 5, 6, 7];
let s = 0;
let e = arr.length - 1;
while (s < e) {
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
}
console.log(arr)