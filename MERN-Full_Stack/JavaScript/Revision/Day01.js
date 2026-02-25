// var n = 10;
// for (let i = 1; i <= n; i++) {
//     console.log(i);
//}

// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }
//-------------------------------EVEN ELEMENT--------------------------------------------
// let n=10;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }
//-------------------------------COUNT ENEN AND ODD ELEMRNT--------------------------------------------
// let n=10;
// let evenCnt = 0;
// let oddcnt = 0;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         evenCnt++;
//     } else {
//         oddcnt++;
//     }
// }
// console.log(`Event Count ${evenCnt} , odd Count ${oddcnt}`);
//
//-------------------------------SUM OF ELEMENT --------------------------------------------
// let n=10;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum)
//
//-------------------------------FACTORIAL--------------------------------------------
// let n=5;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//     fact *= i;
// }
// console.log(fact)
//-------------------------------TABLES--------------------------------------------
// let n=2;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n*i} `);
// }
//-------------------------------REVERSE AND PERIDROME CHECK--------------------------------------------
// var n = 124;
// var rev = 0;
// var org = n;
// while (n != 0) {
//     let id = n % 10;
//     rev = rev * 10 + id
//     n = Math.floor(n / 10);
// }
// if (rev == org) {
//     console.log(true)
// } else {
//     console.log(false)
// }
//---------------------------------LARGEST NUMS OF DIGIT --------------------------------------------

// let largest = 0;
// var n = 258964;
// while (n != 0) {
//     let digit = n % 10;
//     if (digit > largest) {
//         largest = digit;
//     }
//     n = Math.floor(n / 10);
// }
// console.log(largest)

//-------------------------------------NEW TOPIC ARRAY--------------------------------------------

// let arr = [1, 65, 8, 6, 9, 6]
// let n = arr.length;

// for (let i = 0; i < n; i++) {
//     console.log(arr[i])
// }
//-------------------------------SUM OF ELEMENT--------------------------------------------

// let arr = [1, 2, 3]
// let n = arr.length;
// let sum = 0;

// for (let i = 0; i < n; i++) {
//     sum += arr[i]

// }
// console.log(sum)
//
//------------------------------ONLY Largest--------------------------------------------

// let arr = [1, 2, 3]
// let n = arr.length;
// let maxi = arr[0];
// for (let i = 1; i < n; i++) {

//     if (arr[i] > maxi) {
//         maxi = arr[i]

//     }

// }

//console.log(maxi) 
//------------------------------- Largest and Smallest--------------------------------------------

// let arr = [1, 2, 3]
// let n = arr.length;
// let maxi = arr[0];
// let mini = arr[0];
// for (let i = 1; i < n; i++) {

//     if (arr[i] > maxi) {
//         maxi = arr[i]

//     } else if (arr[i] < mini) {
//         mini = arr[i]
//     }

// }
// console.log(maxi, mini)
//-------------------------------2ND Largest--------------------------------------------
// let arr = [1, 2, 3, 4, 6]
// let n = arr.length;
// let maxi = arr[0];
// let smaxi = -1
// for (let i = 1; i < n; i++) {

//     if (arr[i] > maxi) {
//         smaxi = maxi;
//         maxi = arr[i]

//     } else if (arr[i] < maxi && arr[i] > smaxi) {
//         smaxi = arr[i]
//     }

// }
// console.log(smaxi)
//-------------------------------2ND Smallest--------------------------------------------

// let arr = [1, 2, 8, 4, 6];
// let n = arr.length;
// let smallest = Infinity;
// let Ssmallest = Infinity;
// for (let i = 0; i < n; i++) {
//     if (arr[i] < smallest) {
//         Ssmallest = smallest;
//         smallest = arr[i];
//     } else if (arr[i] > smallest && arr[i] < Ssmallest) {
//         Ssmallest = arr[i];
//     }
// }
// console.log(Ssmallest);
//-------------------------------LEFT ROTATE ONE PLACE--------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6];
// let n = arr.length;
// let temp = arr[0];
// for (let i = 1; i < n; i++) {
//     arr[i - 1] = arr[i];
// }
// arr[n - 1] = temp;
// console.log(arr);

//-------------------------------REVERSE ARRAY--------------------------------------------

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// let reverse = [];
// for (let i = n - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
// }
// console.log(reverse);

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// let reverse = [];
// for (let i = n - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
// }
// console.log(reverse);

//-------------------------------PRIME NUMBERS PRINT 1 to n--------------------------------------------


// function isprime(n) {      //check prime number 
//     if (n < 2) return false;

//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return false
//     }

//     return true;
// }
// //print prime numbers
// let n = 10;
// for (let i = 1; i <= n; i++) {
//     if (isprime(i)) {
//         console.log(i);
//     }
// }

//-------------------------------PRIME NUMBERS PRINT 1 to n without function --------------------------------------------

// let n = 100
// for (let i = 1; i <= n; i++) {
//     let isprime = true;
//     if (i < 2) isprime = false;
//     for (let j = 2; j < i; j++) {
//          if (i % j == 0) {
//             isprime = false;
//             break;
//         }
//     }
//     if (isprime) {
//         console.log(i)
//     }
// }
//-------------------------------CHECK PRIME NUMBERS AND PRINT A MESSAGE --------------------------------------------

// function checkPrime(num) {

//     let isprime = true;
//     if (num < 2) isprime = false;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i == 0) {
//             isprime = false;
//             break;

//         }
//     }
//     if (isprime) {
//         console.log(`${num} is prime number `)
//     } else {
//         console.log(`${num} is not a prime number `)

//     }
// }
// checkPrime(3);
//-------------------------------CHECK PRIME NUMBERS AND PRINT TRUE FALSE  --------------------------------------------
// function checkPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i == 0) {
//             return false;
//             break;
//         }
//     }
//     return true;
// }
// console.log(checkPrime(10))

//-------------------------------sum of digit club--------------------------------------------

// let num = 123;
// let sum = 0;
// while (0 < num) {
//     lastDigit = num % 10;
//     sum += lastDigit ** 3;
//     num = Math.floor(num / 10);
// }
// console.log(sum)

//-------------------------------zero +ve -ve counting--------------------------------------------


// let arr = [0, 3, -9, 0, 96, 5, -9, 69, -62, 0, 5, -9]

// function count(arr) {
//     let zero = 0;
//     let positive = 0;
//     let negative = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 0) zero++;
//         else if (arr[i] > 0) positive++;
//         else if (arr[i] < 0) negative++;

//     }
//    //  how to return object from
//     return { zero ,positive ,negative}
// }
// let ans = count(arr)
// console.log(ans)

// //-------------------------------string are uppercate or lower case-----------------------------------------------------

// let str = "B"

// if (str >= "A" && str <= "Z") {
//     console.log("UpperCASE")
// } else if (str >= "a" && str <= "z") {
//     console.log("Lowercase")
// }

// //------------------------uppercase and lower case alphabit counting------------------------------------------

// let str1 = "aBcDefghIJ"

// function stringCount(str1) {
//     let upper = 0;
//     let lower = 0;
//     let special = 0;
//     for (let item of str1) {
//         if (item >= "A" && item <= "Z") {
//             upper++;
//         } else if (item >= "a" && item <= "z") {
//             lower++;

//         } else {
//             special++;
//         }
//     }
//    //  how to return object from
//     return { upper, lower, special }
// }
// console.log(stringCount(str1))


// -- -- -- -- -- -- -- -- --charter counting -- -- -- -- -- -- -- -- -- -- -- -- --
// let str = "helloWorld"
// let ans = {};
// for (let item of str) {
//     if (ans.hasOwnProperty(item)) {
//         ans[item] = ans[item] + 1

//     } else {
//         ans[item] = 1
//     }
// }
// console.log(ans)
//--------------------------Object-------------------------------------
// find =>
// 1 cheapestProduct
// 2 mostExpensiveProduct
// 3 totalPrice
// 4 averagePriceconst 

// let products1 = [{ id: 1, name: "iPhone", price: 80000 },
//     { id: 2, name: "Laptop", price: 65000 },
//     { id: 3, name: "Headphones", price: 3000 },
//     { id: 4, name: "Monitor", price: 12000 },
//     { id: 5, name: "Keyboard", price: 2000 },
//     { id: 6, name: "Smart Watch", price: 15000 }

// ];

// function solution(arr) {
//     let sum = 0;
//     let cheap = arr[0];
//     let expensive = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i].price;
//         if (arr[i].price < cheap.price) {
//             cheap = arr[i];
//         }
//         if (arr[i].price > expensive) {
//             expensive = arr[i];

//         }
//     }
//     let avgPrice = sum / arr.length;
//     return {
//         cheapestProduct: cheap.name,
//         mostExpensiveProduct: expensive.name,
//         totalPrice: sum,
//         averagePriceconst: avgPrice
//     }

// }
// console.log(solution(products1))

//-- -- -- -- -- -- -- -- -- -- -- -- - js1 mock  Q1-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


// function calculateGrade(marks) {
//     if (typeof marks !== "number" || marks > 100 || marks < 0) {
//         return "Invalid Marks";

//     }

//     if (marks <= 100 && marks >= 90) {
//         return "A+";
//     } else if (marks >= 80) {
//         return "A";
//     } else if (marks >= 70) {
//         return "B";
//     } else if (marks >= 60) {
//         return "C";
//     } else if (marks >= 50) {
//         return "D";
//     } else {
//         return "Fail";
//     }

// }
// console.log(calculateGrade("tyui"))


//-----------------------------Q1-------------------------------

// function calculateGrade(marks) {


//     if (typeof marks !== "number" || marks < 0 || marks > 100) {
//         return "Invalid Marks";
//     }

//     switch (true) {
//         case (marks >= 90 && marks <= 100):
//             return "A+";

//         case (marks >= 80):
//             return "A";

//         case (marks >= 70):
//             return "B";

//         case (marks >= 60):
//             return "C";

//         case (marks >= 50):
//             return "D";

//         default:
//             return "F";
//     }
// }


// console.log(calculateGrade(95))
// console.log(calculateGrade(45))
// console.log(calculateGrade(80))
// console.log(calculateGrade(65))
// console.log(calculateGrade(37))
// console.log(calculateGrade(0))



//-----------------------------Q2-------------------------------





// function analyzeWord(word) {
//     if (typeof word !== "string") {
//         return {};
//     }

//     let vowel = "aeiou";

//     let vowelCount = 0;
//     let consonantCount = 0;
//     let len = word.length;
//     let Lowerword = word.toLowerCase();

//     for (let i = 0; i < Lowerword.length; i++) {
//         let ch = Lowerword[i];
//         if (ch >= "a" && ch <= "z") {
//             if (vowel.includes(ch)) {
//                 vowelCount++;

//             } else {
//                 consonantCount++;
//             }
//         }
//     }

//     return {
//         length: len,
//         vowelCount: vowelCount,
//         consonantCount: consonantCount,
//         firstChar: word[0],
//         lastChar: word[len - 1],
//         reversed: word.split("").reverse().join("")

//     }
// }

// console.log(analyzeWord("JavaScript"));

//----------------------Q3------------------------------
// const products = [
//     { name: "Laptop", price: 50000, quantity: 1, category: "electronics" },
//     { name: "Mouse", price: 500, quantity: 2, category: "electronics" },
//     { name: "Notebook", price: 50, quantity: 5, category: "stationery" },
//     { name: "Pen", price: 20, quantity: 10, category: "stationery" }
// ];

// function processCard(products) {
//     let totalItems = 0;
//     let subtotal = 0;
//     let totalDiscount = 0;
//     let maxprice = 0;
//     let mostExpensiveItem = "";

//     for (let i = 0; i < products.length; i++) {

//         totalItems += products[i].quantity;

//         totalprice = products[i].quantity * products[i].price;
//         subtotal += totalprice

//         let discount = 0;
//         if (products[i].category == "electronics") {
//             discount = totalprice * (10 / 100);
//         } else if (products[i].category == "stationery") {
//             discount = totalprice * (5 / 100);

//         }
//         totalDiscount += discount;

//         if (totalprice > maxprice) {
//             maxprice = totalprice
//             mostExpensiveItem = products[i].name
//         }
//     }
//     return {
//         totalItems,
//         subtotal,
//         totalDiscount,
//         finalAmount: subtotal - totalDiscount,
//         mostExpensiveItem
//     }


// }

// console.log(processCard(products))

//----------------------Q4------------------------------
// function calculatorTicketPrice(age, isWeekend) {
//     if (typeof age !== "number" || age < 0 || typeof isWeekend !== "boolean") {
//         return "Invaild Input";
//     }
//     let baseprice = 0;

//     if (age >= 0 && age <= 12) {
//         baseprice = 100;
//     } else if (age >= 13 && age <= 17) {
//         baseprice = 150;
//     } else if (age >= 18 && age <= 59) {
//         baseprice = 200;
//     } else if (age >= 60) {
//         baseprice = 120;
//     }


//     let finalPrice = isWeekend ? baseprice + (baseprice * 20 / 100) : baseprice
//     return finalPrice;


// }

// console.log(calculatorTicketPrice(10, true))
// console.log(calculatorTicketPrice(0, false))

//----------------------------check Password  Q5----------------

// function checkPassword(password) {
//     let hasUpperCase = false;
//     let hasLowerCase = false;
//     let hasNumber = false;
//     let hasSpecial = false;
//     let special = "!@#$%^&*";
//     let len = password.length;
//     for (let i = 0; i < len; i++) {
//         let ch = password[i];
//         if ("A" <= ch && "Z" >= ch) {
//             hasUpperCase = true;
//         } else if ("a" <= ch && "z" >= ch) {
//             hasLowerCase = true;
//         } else if ("0" <= ch && "9" >= ch) {
//             hasNumber = true;
//         } else if (special.includes(ch)) {
//             hasSpecial = true;
//         }
//     }
//     let Totaltype = 0
//     if (hasUpperCase) Totaltype++;
//     if (hasLowerCase) Totaltype++;
//     if (hasNumber) Totaltype++;
//     if (hasSpecial) Totaltype++;

//     let strength;
//     if (len >= 8 && Totaltype == 4) {
//         strength = "Strong";
//     } else if (len >= 6 && Totaltype >= 2) {
//         strength = "Medium";
//     } else {
//         strength = "Weak";
//     }

//     return {
//         Length: len,
//         hasUpperCase,
//         hasLowerCase,
//         hasNumber,
//         hasSpecial,
//         strength
//     }

// }
// console.log(checkPassword("soheb@"))


//----------------------------check Password  Q6----------------

const employees = [
    { name: "Amit", department: "IT", salary: 50000, yearsWorked: 3 },
    { name: "Priya", department: "HR", salary: 45000, yearsWorked: 5 },
    { name: "Rahul", department: "IT", salary: 60000, yearsWorked: 2 },
    { name: "Sneha", department: "Finance", salary: 55000, yearsWorked: 4 }
];

function generateReport(employees) {
    let totalEmployees = employees.length;
    let totalSalary = 0;
    let totalBonus = 0;
    let highestPaid = "";
    let maxSalary = 0;


    for (let i = 0; i < employees.length; i++) {
        totalSalary += employees[i].salary;

        let bonusPersent = 0;
        if (employees[i].yearsWorked <= 2) {
            bonusPersent = 5;
        } else if (employees[i].yearsWorked <= 4) {
            bonusPersent = 10
        } else {
            bonusPersent = 15
        }

        let bonus = (employees[i].salary * bonusPersent) / 100;

        totalBonus += bonus;

        let totalPay = employees[i].salary + bonus;



        if (maxSalary < totalPay) {
            maxSalary = totalPay;
            highestPaid = employees[i].name;

        }


    }
    let totalPayout = totalSalary + totalBonus

    let averageSalary = totalSalary / totalEmployees;
    return {
        totalEmployees,
        totalSalary,
        totalBonus,
        totalPayout,
        highestPaid,
        averageSalary
    }

}

console.log(generateReport(employees))