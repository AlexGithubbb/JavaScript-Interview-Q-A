// way1: literal syntax
const obj1 = {
  name: 'Alex',
  gener: 'male',
  location: 'Canada',
  age: function() {
    return new Date().getFullYear() - 1993;
  }
};

// console.log(obj1.age());

// way2: new keyword
const obj2 = new Object();
obj2.level = 'senior';
obj2.gender = 'female';
obj2.number = '123-123-12333';
obj2.callme = function() {
  console.log(`call me with this number ${this.number}`);
};

obj2.callme();

// way3: constructor / constructor function

// function Obj3(color, brand, year) {
//   this.color = color;
//   this.brand = brand;
//   this.year = year;
// }

class Obj3 {
  constructor(color, brand, year) {
    this.color = color;
    this.brand = brand;
    this.year = year;
  }
}

const obj3 = new Obj3('red', 'honda', 2010);

/**
 this is only for obj3
 obj3.getDescrip = function() {
   console.log(`I bought a ${this.color} ${this.brand} in ${this.year} `);
 };
 */

/*
now getDescrip is a prototype of function/ class Obj3
 this works for all objs that created based on Obj3
 */
Obj3.prototype.getDescrip = function() {
  console.log(`I bought a ${this.color} ${this.brand} in ${this.year} `);
};

obj3.getDescrip();
