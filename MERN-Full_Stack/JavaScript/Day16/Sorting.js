let arr1 = [8, 2, 9, 3, 5, 7, 5, 2, 9]
    //increase
arr1.sort((a, b) => {
    return a - b
})

console.log(arr1)
    //decrease
arr.sort((a, b) => {
    return b - a
})

console.log(arr1)

//--------------------object sort----------------------------------------

let arr = [{
        name: "Mohan",
        age: 12
    },
    {
        name: "Ashish",
        age: 22
    },
    {
        name: "Raju",
        age: 15
    },
    {
        name: "Bhatia",
        age: 15
    },
    {
        name: "Tanya",
        age: 15
    },
    {
        name: "Aayushi",
        age: 12
    },
    {
        name: "Priya",
        age: 12
    },
]


// arr.sort((a,b) => {
//     // return a.age - b.age
//     return b.age - a.age
// })

// arr.sort((a,b) => {
//     // return a.name.localeCompare(b.name)
//     return b.name.localeCompare(a.name)
// })


arr.sort((a, b) => {
    let diff = a.age - b.age

    if (diff == 0) {
        return b.name.localeCompare(a.name)
    }

    return diff
})

console.log(arr)