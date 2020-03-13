class Hero {
  // Properties
  constructor(name, type, strength) {
    this.name = name;
    this.type = type;
    this._strength = strength;
  }

  // Getters and Setters
  get strength() {
    return this._strength;
  }

  set strength(value) {
    this._strength = value;
  }

  // Methods
  sayHi() {
    console.log(`Hello world, my name is ${this.name}!`);
  }

}

// Usage
let hero1 = new Hero("Irelia", "Bruiser", 10);
let hero2 = new Hero("Riven", "Bruiser", 10);

hero1.sayHi();   // hello world, my name is Irelia!
hero2.sayHi();   // hello world, my name is Riven!