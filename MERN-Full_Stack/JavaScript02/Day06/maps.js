// let myMap = new Map()

// myMap.set("name", "qwertyu")
// myMap.set("name2", "riyu")

// console.log(myMap)

// myMap.delete("name")

// myMap.clear()


// for (let [key, value] of myMap) {
//     console.log(key, value)
// }

// myMap.forEach((value, key) => {
//     console.log(value, key)
// })

//        question


// let str = "soheboobb"
// let map = new Map()
// for (let item of str) {
//     if (map.has(item)) {
//         map.set(item, map.get(item) + 1)
//     } else {
//         map.set(item, 1)
//     }
// }
// console.log(map)



// let arr = [10, 5, 6, 10]
// let target = 20
// for (let i = 0; i < arr.length - 1; i++) {

//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] == target) {
//             console.log([i, j])
//             break

//         }
//     }
// }



// function twosum(nums, target) {
//     let map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         let rest = target - nums[i]
//         if (map.has(rest)) {
//             return [map.get(rest), i]
//         }
//         map.set(nums[i], i)
//     }
// }
// let nums = [2, 7, 8, 1];
// let target = 9;

// let result = twosum(nums, target)
// console.log(result)


//------------------------------------------------selflearning


// let map = new Map([
//         ["collage", "JUET"],
//         ["name", "soheb"],
//         ["city", "noida"],
//         ["state", "bihar "],
//     ])
//     // console.log(map.keys())
//     // console.log(map.values())
//     // console.log(map)
// map.set("age", 23)
// console.log(map)
// console.log(map.get("name"))
// map.delete("age")
// console.log(map)
//     // map.clear()
//     // console.log(map)
// console.log(map.has("name"))
// console.log(map.size)



let str = "soheb"
let map = new Map();
for (let item of str) {
    if (map.has(item)) {
        map.set(item, map.get(item) + 1)
    } else {
        map.set(item, 1)
    }

}
console.log(map)