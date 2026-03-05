function linear(arr, x) {
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            index = i;
            break;
        }

    }
    return index;
}
console.log(linear([8, 6, 2, 9, 1, 5], 10))

function linearSea(arr, x) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return true
            break;

        }

    }
    return false;
}
console.log(linearSea([8, 6, 2, 9, 1, 5], 10))

//--------------------------------object linear------------------------

const users = [
    { id: 1, name: "Aman", city: "Dehli" },
    { id: 2, name: "riya", city: "Mumbai" },
    { id: 3, name: "shubham", city: "Dehli" },
    { id: 4, name: "Neha", city: "pune" },
]

// function findObject(arr, tar) {
//     let ans = {};
//     for (let item of arr) { // for loop
//         if (item.id == tar) { //if(arr[i].id == tar)
//             return item;
//         }
//     }
//     return {}
// }

// console.log(findObject(users, 35))


function findObject(arr, cty) {
    let ans = [];
    for (let item of arr) { // for loop
        if (item.city == cty) { //if(arr[i].id == tar)
            ans.push(item.name);
        }
    }
    return ans
}

console.log(findObject(users, "Dehli"))


const products = [{ id: 1, name: "Mouse", price: 500 },
    { id: 2, name: "Keyboard", price: 1500 },
    { id: 3, name: "Monitor", price: 12000 },
    { id: 4, name: "iPhone", price: 80000 },
    { id: 5, name: "Laptop", price: 65000 },
    { id: 6, name: "Tablet", price: 20000 },
    { id: 3, name: "Monitor", price: 12000 },
    { id: 4, name: "iPhone", price: 80000 },
    { id: 5, name: "Laptop", price: 65000 },
    { id: 6, name: "Tablet", price: 20000 }
];

function find(arr) {
    for (let item of arr) {
        if (item.price > 50000) {
            return item;

        }
    }
    return {}
}
console.log(find(products))



const users1 = [{ id: 1, name: "Aman", age: 22, city: "Delhi" },
    { id: 2, name: "Riya", age: 28, city: "Mumbai" },
    { id: 3, name: "Karan", age: 30, city: "Delhi" }
];

function xyz(arr) {
    let ans = []
    for (let item of arr) {
        if (item.age > 25 && item.city == "Delhi") {
            ans.push(item);

        }
    }
    return ans

}
console.log(xyz(users1))



const data = [{ id: 1, name: "TV", category: "electronics" },
    { id: 2, name: "Shirt", category: "clothing" },
    { id: 3, name: "Phone", category: "electronics" },
    { id: 4, name: "Laptop", category: "electronics" }
];

function abc(arr) {
    let ans = {};
    for (let item of arr) {
        if (item.category == "electronics") {
            ans = item;
        }
    }
    return ans
}

console.log(abc(data))

const products1 = [{ id: 1, name: "iPhone", price: 80000 },
    { id: 2, name: "Laptop", price: 65000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Monitor", price: 12000 },
    { id: 5, name: "Keyboard", price: 2000 },
    { id: 6, name: "Smart Watch", price: 15000 }
];


function soheb(arr) {
    let sum = 0;
    let cheapest = products1[0]
    let expensive = products1[0]

    for (let item of arr) {
        sum += item.price;
        if (item.price < cheapest.price) {
            cheapest = item
        }
        if (item.price > cheapest.price) {
            expensive = item
        }

    }
    return {
        cheapestProduct: cheapest.name,
        mostExpensiveProduct: expensive.name,
        totalPrice: sum,
        averagePrice: (sum / arr.length)
    }
}
console.log(soheb(products1))