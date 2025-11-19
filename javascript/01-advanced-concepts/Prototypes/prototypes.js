// Basic Prototype Use
function Person(name){
    this.name = name
}

Person.prototype.sayHi = function() {
    // console.log("Hi, I am" + this.name);
}
const p1 = new Person("Niloy")
const p2 = new Person("Hakim")

p1.sayHi();
p2.sayHi()

// Array prototype
Array.prototype.first = function () {
    return this[2]
}

// console.log([100, 200, 300].first());


// Prototype Chain
function Animal(name) {
    this.name = name
}

Animal.prototype.eat = function () {
    console.log(this.name + " is Eating");
}

function Dog(name) {
    Animal.call(this, name)
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const d = new Dog("Rocky")
d.eat()