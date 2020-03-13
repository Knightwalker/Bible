class Person {
  
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    debugger;
    this._name = val;
  }

}

let p1 = new Person("Gosho");
let p2 = new Person(2);

class Rectangle {
  constructor (width, height) {
      this._width  = width;
      this._height = height;
  }
  set width  (width)  { this._width = width;               }
  get width  ()       { return this._width;                }
  set height (height) { this._height = height;             }
  get height ()       { return this._height;               }
  get area   ()       { return this._width * this._height; }
};
var r = new Rectangle(50, 20);
r.area === 1000;