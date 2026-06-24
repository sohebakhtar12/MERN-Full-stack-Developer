//Contructor function
function Person(name, age , city){
    this.name=name
    this.age=age
    this.city=city
}

let p1=new Person("soheb",24,"katihar")
let p2=new Person("ravi",23,"kanpur")
console.log(p1, p2)


Person.prototype.sayHi=function(){
    console.log(`Hello, My name is ${this.name}`)
}
p1.sayHi()
p2.sayHi()

//---------------------------------------------------------------------------







//Class

class Car{
    constructor(b,t,c){
        this.brand=b
        this.tyres=t
        this.color=c

    }
    tellAbout(){
        console.log(this.brand, this.tyres, this.color)
    }
}

let c1 = new Car("BMW",4, "red" )
let c2 = new Car("Suzuki", 4, "blue" )
console.log(c1,c2)

c1.tellAbout()
c2.tellAbout()