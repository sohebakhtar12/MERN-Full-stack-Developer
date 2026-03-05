let a = Number(prompt("ENTER NUMBER a"))
let b = Number(prompt("ENTER NUMBER b"))
let operation = prompt("enter opertor : + ,-, /, *,")
if (isNuN(a) || isNuN(b)) {
    console.log("Invalid Input")

} else {
    switch (operation) {
        case "+":
            console.log(a + b)
            break

        case "-":
            console.log(a - b)
            break

        case "*":
            console.log(a * b)
            break

        case "/":
            console.log(a / b)
            break

        default:
            console.log('invalid number');





    }
}