{
    var a = 10;
    let b = 20
    const c = 30

    console.log(a, b, c)
}
console.log(a) //var is accessible outside the block
console.log(b) //let and const shows block scope,can not accessed outside of block,hence error show (reference error)
console.log(c) //same case of lat

//Functional Scope 
function abc() {
    var a = 10;
    let b = 20
    const c = 30
    console.log(a, b, c)

}
console.log(a) //can not accessany ofthenoutside thefunctionas all of them shows functional scope 
console.log(b) //can not accessany ofthenoutside thefunctionas all of them shows functional scope 
console.log(c) //can not accessany ofthenoutside thefunctionas all of them shows functional  scope