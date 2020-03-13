class Hero {
  // Properties
  constructor(name, type, strength) {
    this.name = name;
    this.type = type;
    this.strength = strength;
  }

  // Getters and Setters - they are slightly changed from ES6. Function name must be exactly as the property, while the value name must be with an underscore.
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