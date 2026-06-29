class Parent{
    constructor(name="", age=""){
        this.name=name
        this.age=age
    }
    sayHi(){
        console.log("Namaste")
    }
}

class Child extends Parent{
    constructor(n,a,mobile){
        super(n,a)
        this.mobile=mobile
    }
    sayHi(){
        console.log("hello")
    }
}

class GrandChild extends Child{
    constructor(n,a,m,cycle){
        super(n,a,m)
        this.cycle=cycle

       
    }
     sayHi(){
            console.log("Aur larke ky haal")
        }
}

const p1 = new Parent("dads",60)
console.log(p1)

const c1 = new Child("Sumit", 40, "Apple")
console.log(c1)

const gc1 = new GrandChild("Abhishek", 20, "Samsung", "Tricycle")
console.log(gc1)

p1.sayHi()
c1.sayHi()
gc1.sayHi()

console.log(Array.prototype)