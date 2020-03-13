var Hero = function (name, type, strength) {
  // Properties
  this.name = name;
  this.type = type;
  this.strength = strength;
};

// Methods
Hero.prototype.sayHi = function () {
  console.log(`Hello world, my name is ${this.name}!`);
};

// Usage
let hero1 = new Hero("Irelia", "Bruiser", 10);
let hero2 = new Hero("Riven", "Bruiser", 10);

hero1.sayHi();   // hello world, my name is Irelia!
hero2.sayHi();   // hello world, my name is Riven!