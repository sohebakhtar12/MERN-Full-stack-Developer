let arr = [15, 26, 3, 8, 26, 56]

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j >= 0; j--) {
        if (arr[j] < arr[j - 1]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp
        } else {
            break;
        }
    }
}
console.log(arr)