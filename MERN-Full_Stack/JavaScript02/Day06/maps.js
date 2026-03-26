// const { Children } = require("react")

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


// let str = "soheb"
// let map = new Map()

// for (let item of str) {
//     if (map.has(item)) {
//         map.set(item, map.get(item) + 1)
//     } else {
//         map.set(item, 1)
//     }
// }



let arr = [10, 5, 6, 10]
let target = 20
for (let i = 0; i < arr.length - 1; i++) {

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == target) {
            console.log([i, j])
            break

        }
    }
}



var twoSum = function(nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return
        }
    }
}