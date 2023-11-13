// Constructor Function
function Elf1(name, weapon) {
  this.name = name
  this.weapon = weapon
}

Elf1.prototype.attack = function () {
  return 'attack with ' + this.weapon
}

// ES6 Class
class Elf2 {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack() {
    return 'attack with ' + this.weapon
  }
}

const peter = new Elf1('Peter', 'stones')

const sam = new Elf2('Sam', 'knife')

console.log(peter instanceof Elf1)

console.log(peter.attack())

console.log(sam.attack())

// constructor function gets run everytime 'new' keyword is instantiated or used.
// in OOP, we want to keep all of our functionality i.e. variables/state, methods, and actions with in the class. these functionalities are available to every instance/objects.
// classes are syntactic sugar. Under the hood, class keyword is prototypal inheritance.
// Brendan Eich was tasked with creating a competing language that would attract Java developers that were used to classes and OOP concepts. For marketing purposes, he couldn't make it the exact same therefore he used prototypal inheritance which is different from how classes work in Java and C++. In JS, classes are objects under the hood.
// Everything in JS is an object.
// prototypal inheritance is also called pseudo classical inheritance because it is not real classical inheritance.

// Why don't we create methods within constructors?
// Because we only keep values in the constructor. Methods are to be shared by all instances of the class. Putting methods in constructors will occupy memory for each instance.
