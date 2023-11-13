// Inheritance: Passing knowledge down.
// It is a core aspect of OOP.

// Super/Base class
class Character {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack() {
    return 'attack with ' + this.weapon
  }
}

// Sub/Derived class
class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon)
    this.type = type
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon)
    this.color = color
  }
  makeFort(fortName) {
    return 'Fort: ' + fortName + ' has been made'
  }
}

const fiona = new Elf('Fiona', 'ninja stars', 'fairy')
const shrek = new Ogre('Shrek', 'club', 'green')

console.log(shrek.makeFort('Big Blue'))
