// let arr = [9, 1, 0, 2, 6]
// for (let i = 0; i < arr.length - 1; i++) {
//     let minIdx = i
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[minIdx]) {
//             minIdx = j
//         }
//     }
//     if (i != minIdx) {
//         let temp = arr[minIdx];
//         arr[minIdx] = arr[i];
//         arr[i] = temp;
//     }
// }
// console.log(arr)

\\ insertion sort 
let arr = [9, 1, 0, 2, 6]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j>=0;j--){
        if(arr[j]<arr[j-1]){
            [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
        }
        else {
            break
        }
    }

}
console.log(arr)